#!/bin/bash

# ===================================
# NEAIST Website - Local Preview Script
# ===================================

echo "🌍 NEAIST Website - Local Preview"
echo "=================================="
echo ""

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Check if Python 3 is available
if command -v python3 &> /dev/null
then
    echo "✅ Python 3 found!"
    echo "🚀 Starting local server on http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    
    cd "$SCRIPT_DIR"
    python3 -m http.server 8000
    
# Check if Python 2 is available
elif command -v python &> /dev/null
then
    echo "✅ Python 2 found!"
    echo "🚀 Starting local server on http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    
    cd "$SCRIPT_DIR"
    python -m SimpleHTTPServer 8000
    
# Check if PHP is available
elif command -v php &> /dev/null
then
    echo "✅ PHP found!"
    echo "🚀 Starting local server on http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    
    cd "$SCRIPT_DIR"
    php -S localhost:8000
    
else
    echo "❌ No suitable server found!"
    echo ""
    echo "Please install one of the following:"
    echo "  - Python 3: sudo apt install python3 (or brew install python3 on Mac)"
    echo "  - PHP: sudo apt install php (or brew install php on Mac)"
    echo ""
    echo "Or use VS Code with the 'Live Server' extension"
fi
