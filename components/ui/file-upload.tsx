"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, X, File, ImageIcon, FileText } from "lucide-react"

interface FileUploadProps {
  accept?: string
  multiple?: boolean
  maxSize?: number // in MB
  onFilesChange?: (files: File[]) => void
  className?: string
}

export function FileUpload({
  accept = "*/*",
  multiple = false,
  maxSize = 10,
  onFilesChange,
  className = "",
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFiles = useCallback(
    (newFiles: FileList | null) => {
      if (!newFiles) return

      const validFiles = Array.from(newFiles).filter((file) => {
        if (file.size > maxSize * 1024 * 1024) {
          alert(`File ${file.name} is too large. Maximum size is ${maxSize}MB.`)
          return false
        }
        return true
      })

      const updatedFiles = multiple ? [...files, ...validFiles] : validFiles
      setFiles(updatedFiles)
      onFilesChange?.(updatedFiles)
    },
    [files, multiple, maxSize, onFilesChange],
  )

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index)
    setFiles(updatedFiles)
    onFilesChange?.(updatedFiles)
  }

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)
      handleFiles(e.dataTransfer.files)
    },
    [handleFiles],
  )

  const simulateUpload = () => {
    setUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) return <ImageIcon className="h-4 w-4" />
    if (file.type.includes("text") || file.type.includes("document")) return <FileText className="h-4 w-4" />
    return <File className="h-4 w-4" />
  }

  return (
    <div className={className}>
      <Card
        className={`border-2 border-dashed transition-colors ${
          dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <CardContent className="p-8 text-center">
          <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Upload Files</h3>
          <p className="text-muted-foreground mb-4">Drag and drop files here, or click to select files</p>
          <input
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
            id="file-upload"
          />
          <Button asChild>
            <label htmlFor="file-upload" className="cursor-pointer">
              Select Files
            </label>
          </Button>
          <p className="text-xs text-muted-foreground mt-2">Maximum file size: {maxSize}MB</p>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          <h4 className="font-medium">Selected Files</h4>
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                {getFileIcon(file)}
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}

          {uploading && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Uploading...</span>
                <span className="text-sm">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} />
            </div>
          )}

          <Button onClick={simulateUpload} disabled={uploading} className="w-full">
            {uploading ? "Uploading..." : "Upload Files"}
          </Button>
        </div>
      )}
    </div>
  )
}
