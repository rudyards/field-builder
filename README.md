# field-builder

field-builder depends on Jimp 
> npm i jimp

## Using field-builder
First, use the magic-field-test exporter on MSE sets to get a folder of images and a txt of LackeyBot data for their cards. The names of these don't matter, as long as the pair stays consistent as "example.txt" and "/example" or "example.txt" and "/example-files".

Set codes used per set should be unique, as Cockatrice and LackeyBot can't properly tell them apart otherwise. During the formatting step, LackeyBot will add a number to duplicate set codes it finds.

Add all the exported files and folders to the "/files" folder, then run `node field-builder` or `node field-builder --noimages`. file-builder will attempt to crunch the files into LackeyBot and Cockatrice data. If successful, and run without `--noimages`, it will then rename the images to the Cockatrice names and split DFCs.

If successful, field-builder will output `/final_xmls/cards.xml` and `/final_xmls/tokens.xml`, as well as  `/lbfiles/cards.json` and `/lbfiles/setData.json`to be used for LackeyBot. The XMLs are put in a Cockatrice `/data` folder, while the finalized folders in `/files` go in `/data/pics/downloadedPics/`.