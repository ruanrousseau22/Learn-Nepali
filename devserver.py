#!/usr/bin/env python3
"""Local preview server for Bhasaly.

python3 -m http.server sends no Cache-Control header, so browsers fall back to
heuristic caching from Last-Modified and happily serve a stale lang/*.js or
index.html after an edit. That cost real time during the July 2026 build —
changes looked like they had not applied when they had. This server sends
no-store on everything, so a plain refresh always shows the current files.

    python3 devserver.py [port]
"""
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, fmt, *args):      # quiet: one line per request is noise
        pass

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8642
    ThreadingHTTPServer(('127.0.0.1', port), NoCacheHandler).serve_forever()
