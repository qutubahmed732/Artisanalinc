import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div className="min-h-screen bg-[#030303] text-white font-sans p-8 flex items-center justify-center">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-2xl font-bold text-red-400">Something went wrong</h1>
            <pre className="text-sm text-zinc-400 bg-black/40 p-4 rounded overflow-auto">
              {this.state.error.message}
            </pre>
            <p className="text-zinc-500 text-sm">
              Check the browser console (F12 → Console) for full details.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
