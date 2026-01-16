import { useState, useRef } from "react";
import { X, Copy, Check, HelpCircle, Sun, Moon, Upload, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InstructionsModal from "./InstructionsModal";

interface FormData {
  name: string;
  title: string;
  company: string;
  phone: string;
  twitter: string;
}

const SignatureGenerator = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    title: "",
    company: "",
    phone: "",
    twitter: "",
  });
  const [logo, setLogo] = useState<string | null>(null);
  const [logoFileName, setLogoFileName] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [darkPreview, setDarkPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const clearField = (field: keyof FormData) => {
    setFormData((prev) => ({ ...prev, [field]: "" }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogo(null);
    setLogoFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const generateSignatureHTML = () => {
    const { name, title, company, phone, twitter } = formData;
    const contactParts = [];
    if (phone) contactParts.push(phone);
    if (twitter) contactParts.push(`@${twitter.replace("@", "")}`);
    const contactLine = contactParts.join(" • ");
    const titleLine = [title, company].filter(Boolean).join(" at ");

    const logoHtml = logo
      ? `<tr>
    <td style="padding-bottom: 12px;">
      <img src="${logo}" alt="Company Logo" height="32" style="display: block; border: 0; max-width: 140px; height: auto;" />
    </td>
  </tr>`
      : "";

    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; line-height: 1.5;">
  ${logoHtml}
  <tr>
    <td>
      <p style="margin: 0 0 2px 0; font-weight: 600; color: #1a1a1a; font-size: 15px;">${name || "Your Name"}</p>
      ${titleLine ? `<p style="margin: 0 0 8px 0; color: #6b6b6b; font-size: 13px;">${titleLine}</p>` : ""}
      ${contactLine ? `<p style="margin: 0; color: #6b6b6b; font-size: 13px;">${contactLine}</p>` : ""}
    </td>
  </tr>
</table>`;
  };

  const copyToClipboard = async () => {
    const html = generateSignatureHTML();
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([html], { type: "text/plain" }),
        }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const { name, title, company, phone, twitter } = formData;
  const contactParts = [];
  if (phone) contactParts.push(phone);
  if (twitter) contactParts.push(`@${twitter.replace("@", "")}`);
  const contactLine = contactParts.join(" • ");
  const titleLine = [title, company].filter(Boolean).join(" at ");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-6 md:p-12">
      <div className="w-full max-w-xl animate-fade-up">
        {/* Header */}
        <div className="text-center mb-10">
          <img 
            src="/favicon.png" 
            alt="Signature Lab" 
            className="w-14 h-14 mx-auto mb-4 rounded-2xl shadow-sm"
          />
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2 tracking-tight">
            Signature Lab
          </h1>
          <p className="text-muted-foreground">
            Create professional email signatures in seconds
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-5 sm:p-6 mb-6">
          {/* Logo Upload */}
          <div className="mb-6">
            <Label className="text-sm font-medium text-foreground mb-2 block">
              Company Logo
            </Label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
              id="logo-upload"
            />
            {!logo ? (
              <label
                htmlFor="logo-upload"
                className="flex items-center justify-center gap-3 h-20 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 hover:bg-accent/50 transition-all group"
              >
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">Upload logo</span>
                </div>
              </label>
            ) : (
              <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center overflow-hidden border border-border">
                  <img src={logo} alt="Logo preview" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{logoFileName}</p>
                  <p className="text-xs text-muted-foreground">Click to replace</p>
                </div>
                <button
                  onClick={removeLogo}
                  className="p-1.5 rounded-lg hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-6" />

          {/* Form Fields */}
          <div className="space-y-4">
            {[
              { key: "name", label: "Full Name", placeholder: "Jane Smith" },
              { key: "title", label: "Job Title", placeholder: "Product Designer" },
              { key: "company", label: "Company", placeholder: "Acme Inc." },
              { key: "phone", label: "Phone", placeholder: "+1 (555) 123-4567" },
              { key: "twitter", label: "Twitter / X", placeholder: "janesmith" },
            ].map(({ key, label, placeholder }) => (
              <div key={key} className="group">
                <Label htmlFor={key} className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5 block">
                  {label}
                </Label>
                <div className="relative">
                  <Input
                    id={key}
                    type="text"
                    value={formData[key as keyof FormData]}
                    onChange={(e) => handleChange(key as keyof FormData, e.target.value)}
                    placeholder={placeholder}
                    className="h-11 pr-10 bg-background border-border/70 focus:border-primary/50 transition-colors"
                  />
                  {formData[key as keyof FormData] && (
                    <button
                      onClick={() => clearField(key as keyof FormData)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-all opacity-0 group-hover:opacity-100"
                      aria-label={`Clear ${label}`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preview Card */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden mb-6">
          <div className="flex items-center justify-between px-5 py-3 border-b border-border/50">
            <h2 className="text-sm font-medium text-foreground">Preview</h2>
            <button
              onClick={() => setDarkPreview(!darkPreview)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            >
              {darkPreview ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              {darkPreview ? "Light" : "Dark"}
            </button>
          </div>
          <div
            className={`p-6 transition-colors ${
              darkPreview ? "bg-zinc-900" : "bg-white"
            }`}
          >
            <div className="font-sans text-sm leading-relaxed">
              {/* Logo */}
              {logo && (
                <div className="mb-3">
                  <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
                </div>
              )}
              {!logo && (
                <div className="mb-3">
                  <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs ${
                    darkPreview ? "bg-zinc-800 text-zinc-500" : "bg-zinc-100 text-zinc-400"
                  }`}>
                    <ImageIcon className="w-3 h-3" />
                    No logo
                  </div>
                </div>
              )}
              {/* Name */}
              <p className={`font-semibold text-[15px] mb-0.5 ${
                darkPreview ? "text-white" : "text-zinc-900"
              }`}>
                {name || "Your Name"}
              </p>
              {/* Title */}
              {(title || company) && (
                <p className={`text-[13px] mb-2 ${
                  darkPreview ? "text-zinc-400" : "text-zinc-500"
                }`}>
                  {titleLine}
                </p>
              )}
              {/* Contact */}
              {contactLine && (
                <p className={`text-[13px] ${
                  darkPreview ? "text-zinc-400" : "text-zinc-500"
                }`}>
                  {contactLine}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={copyToClipboard} className="flex-1 h-11" variant="default">
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied to clipboard
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy HTML
              </>
            )}
          </Button>
          <Button
            onClick={() => setShowInstructions(true)}
            variant="secondary"
            className="flex-1 h-11"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            How to import
          </Button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Paste the copied HTML into your email client's signature settings
        </p>
      </div>

      <InstructionsModal open={showInstructions} onClose={() => setShowInstructions(false)} />
    </div>
  );
};

export default SignatureGenerator;
