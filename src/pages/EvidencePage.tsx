import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FolderOpen, Award, Image, FileText } from "lucide-react";

const categories = [
  { name: "Certificates", icon: Award, count: 3 },
  { name: "Photos", icon: Image, count: 8 },
  { name: "Documents", icon: FileText, count: 5 },
  { name: "Seminars", icon: FolderOpen, count: 2 },
];

export default function EvidencePage() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Evidence & Achievements</h1>
          <p className="text-sm text-muted-foreground mt-1">Upload and organize your internship portfolio</p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Card className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <cat.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-card-foreground">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">{cat.count} files</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty state placeholder */}
      <Card>
        <CardContent className="p-12 text-center">
          <Upload className="mx-auto h-10 w-10 text-muted-foreground/50 mb-3" />
          <h3 className="font-display font-semibold text-card-foreground">Upload Evidence</h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
            Drag and drop files here, or click the upload button to add certificates, photos, and documents to your portfolio.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
