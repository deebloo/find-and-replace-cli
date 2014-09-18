#!/usr/bin/env node

var program = require('commander'),
    replace = require('find-and-replace');

/**
 * Set up command line program
 */
program
  .version('0.0.5')
  .usage('[myFile.txt] [newFile.txt](optional) \'{"value1": "replacement", "value2": "replacement2"}\'')
  .parse(process.argv);

var args = program.args;

// If not arguments display the help view
if(!args.length)
{

  program.help();

}
else
{

  // Check if one or two file paths are provided
  var twoFiles = args.length === 3;

  /**
   * File1 === the first argument
   * File2 === the first argument if only one file is provided, the second if both are provided
   *replacement === the second argument if only one one file is provided the third is both are provided
   */
  var file1 = args[0],
      file2 = twoFiles ? args[1] : args[0],
      replacement =  twoFiles ? args[2] : args[1];

  if(replacement[0] === '{' && replacement[replacement.length - 1] === '}')
  {

    replacement = JSON.parse(replacement);

  }
  else
  {

    console.error('ERR: ): Replacement string is not properly formatted! :(');

    return 0;

  }

  /**
   * Use find-and-replace module.
   * pass in two files and the replacement object
   * the callback logs out the appropriate message based on situation
   */
  replace(file1, file2, replacement, function callback()
  {
    if(file1 === file2)
    {

      console.log(file1 + ' modified.');

    }
    else
    {

      console.log(file2 + ' created.');

    }

  });

}




