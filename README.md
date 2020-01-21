## css-injector

To create this extension for the desired client, open the file in visual studios using powershell then navigate to the elements.xml page, which is located in the assets folder inside the sharepoint folder. Once here replace the text which says "<ENTER THE CSS FILE LOCATION HERE>" with the url link to your css sheet. An example of this is : /sites/testsite/CDNOrigin/CssSheet.css.

Once this is done go back to the powershell window and then run "gulp bundle --ship", once this is complete run "gulp package-solution --ship". Once both of these have been run you will get your sppkg file which you can then upload to the site catalog. Once the file has been uploaded go to the site you need to add the css too and add the new app like you would any other app.