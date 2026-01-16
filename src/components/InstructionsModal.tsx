import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface InstructionsModalProps {
  open: boolean;
  onClose: () => void;
}

const InstructionsModal = ({ open, onClose }: InstructionsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            How to add your signature
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="gmail" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gmail">Gmail</TabsTrigger>
            <TabsTrigger value="macos">macOS Mail</TabsTrigger>
            <TabsTrigger value="ios">iOS Mail</TabsTrigger>
          </TabsList>

          <TabsContent value="gmail" className="mt-6 space-y-4">
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  1
                </span>
                <span>Open Gmail and click the gear icon → <strong className="text-foreground">See all settings</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  2
                </span>
                <span>Scroll to the <strong className="text-foreground">Signature</strong> section</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  3
                </span>
                <span>Click <strong className="text-foreground">Create new</strong> and name your signature</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  4
                </span>
                <span>Paste your copied signature into the text box</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  5
                </span>
                <span>Scroll down and click <strong className="text-foreground">Save Changes</strong></span>
              </li>
            </ol>
          </TabsContent>

          <TabsContent value="macos" className="mt-6 space-y-4">
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  1
                </span>
                <span>Open Mail and go to <strong className="text-foreground">Mail → Settings → Signatures</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  2
                </span>
                <span>Select your email account and click the <strong className="text-foreground">+</strong> button</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  3
                </span>
                <span>Paste your copied signature into the preview area on the right</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  4
                </span>
                <span>Drag the signature to your email account to set it as default</span>
              </li>
            </ol>
          </TabsContent>

          <TabsContent value="ios" className="mt-6 space-y-4">
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  1
                </span>
                <span>Go to <strong className="text-foreground">Settings → Mail → Signature</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  2
                </span>
                <span>Toggle <strong className="text-foreground">Per Account</strong> if you want different signatures</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  3
                </span>
                <span>Paste your copied signature into the text field</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                  4
                </span>
                <span className="text-amber-600">Note: iOS Mail has limited HTML support — some styling may not appear</span>
              </li>
            </ol>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default InstructionsModal;
