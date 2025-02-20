.PHONY: clean website

ASSETS=assets/ensps.css \
	   assets/style.css \
	   assets/presence.json \
	   assets/presence.schema.json \
	   assets/presence.js

website: index.html $(ASSETS)
	@echo "Copying assets"
	mkdir -p _static/assets
	cp -r assets/* _static/assets
	cp index.html _static/index.html
	@echo "Done"

index.html: assets/index.template.html index.md  assets/presence.json
	@echo "Generating index.html"
	pandoc -t html5 -s index.md -o index.html \
		   --template=assets/index.template.html \
		   --css=assets/style.css \
		   --metadata-file=assets/presence.json


clean:
	rm -f index.html
	rm -rf _static

