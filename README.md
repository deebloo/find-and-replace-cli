Find and Replace cli
=========

Find and replace command line utility.

Uses find-and-replace module

## Installation
  ```
  npm install find-and-replace-cli
  ```

## Usage
  Input: myFile.txt
  ```
  %Heading%
  
  Welcome to this months newsletter
  ...
  
  %Footer%
  ```
  
  Terminal Command:
  ```
  fandr myFile.txt newFile.txt '{"%Heading%": "Good Morning San Diego!", "%Footer%": "Yaz Flute"}'
  ```
  
  Output: newFile.txt
  ```
  Good Morning San Diego!
  
  Welcome to this months newsletter
  ...
  
  Yaz Flute
  ```

* 0.1.0
