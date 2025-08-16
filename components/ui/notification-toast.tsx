"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"

type ToastType = "success" | "error" | "warning" | "info"

interface Toast {
  id: string
  type: ToastType
  title: string
  description?: string
  duration?: number
}

interface NotificationToastProps {
  toast: Toast
  onClose: (id: string) => void
}

export function NotificationToast({ toast, onClose }: NotificationToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose(toast.id), 300)
      }, toast.duration)

      return () => clearTimeout(timer)
    }
  }, [toast.duration, toast.id, onClose])

  const getIcon = () => {
    switch (toast.type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  const getBorderColor = () => {
    switch (toast.type) {
      case "success":
        return "border-l-green-500"
      case "error":
        return "border-l-red-500"
      case "warning":
        return "border-l-yellow-500"
      case "info":
        return "border-l-blue-500"
    }
  }

  return (
    <Card
      className={`border-l-4 ${getBorderColor()} transition-all duration-300 ${
        isVisible ? "animate-slide-in-right" : "animate-slide-out-right"
      }`}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          {getIcon()}
          <div className="flex-1">
            <h4 className="font-semibold">{toast.title}</h4>
            {toast.description && <p className="text-sm text-muted-foreground mt-1">{toast.description}</p>}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setIsVisible(false)
              setTimeout(() => onClose(toast.id), 300)
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Toast container component
export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, "id">) => {
    const newToast = { ...toast, id: Date.now().toString() }
    setToasts((prev) => [...prev, newToast])
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  // Example function to demonstrate usage
  const showExampleToasts = () => {
    addToast({
      type: "success",
      title: "Success!",
      description: "Your action was completed successfully.",
      duration: 3000,
    })

    setTimeout(() => {
      addToast({
        type: "error",
        title: "Error occurred",
        description: "Something went wrong. Please try again.",
        duration: 5000,
      })
    }, 1000)
  }

  return (
    <div>
      <Button onClick={showExampleToasts} className="mb-4">
        Show Example Toasts
      </Button>

      <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
        {toasts.map((toast) => (
          <NotificationToast key={toast.id} toast={toast} onClose={removeToast} />
        ))}
      </div>
    </div>
  )
}
