#!/bin/bash

# Script to add language switcher to all navigation menus in HTML files

echo "Adding language switcher to all pages..."

# Array of HTML files
files=("sobre-nos.html" "contactos.html" "recursos.html" "guia-caloiro.html" "mentoria.html")

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Processing $file..."
        
        # Add language switcher before </ul> in nav-list
        sed -i 's|</ul>|                        <li class="nav-item language-switcher">\n                            <button class="lang-btn active" data-lang="pt" aria-label="Português">PT</button>\n                            <span class="lang-separator">|</span>\n                            <button class="lang-btn" data-lang="en" aria-label="English">EN</button>\n                        </li>\n                    </ul>|' "$file"
        
        # Add languages.js script before main.js
        sed -i 's|<script src="js/main.js">|<script src="js/languages.js"></script>\n    <script src="js/main.js">|' "$file"
        
        echo "✓ $file updated"
    else
        echo "✗ $file not found"
    fi
done

echo "Done! All pages updated with language switcher."
