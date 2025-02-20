
index.html: assets/index.template.html index.md  assets/presence.json
	@echo "Generating index.html"
	pandoc -t html5 -s index.md -o index.html \
		   --template=assets/index.template.html \
		   --css=assets/style.css \
		   --metadata-file=assets/presence.json
