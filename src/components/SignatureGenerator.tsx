import { useState } from "react";
import { X, Copy, Check, HelpCircle, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InstructionsModal from "./InstructionsModal";

interface FormData {
  name: string;
  title: string;
  phone: string;
  twitter: string;
}

const SignatureGenerator = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    title: "",
    phone: "",
    twitter: "",
  });
  const [copied, setCopied] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [darkPreview, setDarkPreview] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const clearField = (field: keyof FormData) => {
    setFormData((prev) => ({ ...prev, [field]: "" }));
  };

  const generateSignatureHTML = () => {
    const { name, title, phone, twitter } = formData;
    const contactParts = [];
    if (phone) contactParts.push(phone);
    if (twitter) contactParts.push(`@${twitter.replace("@", "")}`);
    const contactLine = contactParts.join(" • ");

    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; line-height: 1.4;">
  <tr>
    <td style="padding-bottom: 12px;">
      <a href="https://yourcompany.com" target="_blank" style="text-decoration: none;">
        <img src="https://via.placeholder.com/120x30/1a1a1a/ffffff?text=COMPANY" alt="Company Logo" width="120" height="30" style="display: block; border: 0;" />
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <p style="margin: 0 0 4px 0; font-weight: 600; color: #1a1a1a;">${name || "Your Name"}</p>
      <p style="margin: 0 0 8px 0; color: #6b6b6b;">${title || "Your Title"} at Company</p>
      ${contactLine ? `<p style="margin: 0; color: #6b6b6b;">${contactLine}</p>` : ""}
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
      // Fallback for browsers that don't support ClipboardItem
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const { name, title, phone, twitter } = formData;
  const contactParts = [];
  if (phone) contactParts.push(phone);
  if (twitter) contactParts.push(`@${twitter.replace("@", "")}`);
  const contactLine = contactParts.join(" • ");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-2xl animate-fade-up">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Email Signature Generator
          </h1>
          <p className="text-muted-foreground text-lg">
            Create a professional signature in seconds
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5 mb-10">
          {[
            { key: "name", label: "Full Name", placeholder: "Jane Smith" },
            { key: "title", label: "Job Title", placeholder: "Product Designer" },
            { key: "phone", label: "Phone", placeholder: "+1 (555) 123-4567" },
            { key: "twitter", label: "Twitter / X", placeholder: "janesmith" },
          ].map(({ key, label, placeholder }) => (
            <div key={key} className="space-y-2">
              <Label htmlFor={key} className="text-sm font-medium text-foreground">
                {label}
              </Label>
              <div className="relative">
                <Input
                  id={key}
                  type="text"
                  value={formData[key as keyof FormData]}
                  onChange={(e) => handleChange(key as keyof FormData, e.target.value)}
                  placeholder={placeholder}
                  className="pr-10"
                />
                {formData[key as keyof FormData] && (
                  <button
                    onClick={() => clearField(key as keyof FormData)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Clear ${label}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Preview */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-foreground">Preview</h2>
            <button
              onClick={() => setDarkPreview(!darkPreview)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {darkPreview ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {darkPreview ? "Light" : "Dark"}
            </button>
          </div>
          <div
            className={`rounded-xl p-6 border transition-colors ${
              darkPreview
                ? "bg-preview-dark border-preview-dark-border"
                : "bg-preview-light border-preview-light-border"
            }`}
          >
            <div className="font-sans text-sm leading-relaxed">
              {/* Logo */}
              <div className="mb-3">
                <div
                  className={`inline-block px-4 py-1.5 rounded text-xs font-semibold tracking-wide ${
                    darkPreview ? "bg-white text-zinc-900" : "bg-zinc-900 text-white"
                  }`}
                >
                  COMPANY
                </div>
              </div>
              {/* Name */}
              <p
                className={`font-semibold mb-1 ${
                  darkPreview ? "text-white" : "text-zinc-900"
                }`}
              >
                {name || "Your Name"}
              </p>
              {/* Title */}
              <p
                className={`mb-2 ${
                  darkPreview ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                {title || "Your Title"} at Company
              </p>
              {/* Contact */}
              {contactLine && (
                <p
                  className={darkPreview ? "text-zinc-400" : "text-zinc-500"}
                >
                  {contactLine}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={copyToClipboard} className="flex-1" variant="default">
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
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
            className="flex-1"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            How to import?
          </Button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-10">
          Paste the copied HTML into your email client's signature settings
        </p>
      </div>

      <InstructionsModal open={showInstructions} onClose={() => setShowInstructions(false)} />
    </div>
  );
};

export default SignatureGenerator;
