#!/bin/bash

# Check if both versions of a file exist and remove the one with underscore
check_and_fix() {
  local base_name=$1
  local with_underscore="_$base_name.scss"
  local without_underscore="$base_name.scss"
  
  if [ -f "/Users/zhengzihao/Desktop/Personal/joshbushdash.github.io/_sass/$with_underscore" ] && 
     [ -f "/Users/zhengzihao/Desktop/Personal/joshbushdash.github.io/_sass/$without_underscore" ]; then
    echo "Found both $with_underscore and $without_underscore, removing $with_underscore"
    rm "/Users/zhengzihao/Desktop/Personal/joshbushdash.github.io/_sass/$with_underscore"
  elif [ -f "/Users/zhengzihao/Desktop/Personal/joshbushdash.github.io/_sass/$with_underscore" ]; then
    echo "Found only $with_underscore"
  elif [ -f "/Users/zhengzihao/Desktop/Personal/joshbushdash.github.io/_sass/$without_underscore" ]; then
    echo "Found only $without_underscore"
  else
    echo "Neither $with_underscore nor $without_underscore found"
  fi
}

# List of sass files
for file in vars layout sidebar navigation pagination toc post search darkmode; do
  check_and_fix "$file"
done

# Remove main.scss if it exists
if [ -f "/Users/zhengzihao/Desktop/Personal/joshbushdash.github.io/_sass/main.scss" ]; then
  echo "Removing main.scss"
  rm "/Users/zhengzihao/Desktop/Personal/joshbushdash.github.io/_sass/main.scss"
fi

echo "Files after cleanup:"
ls -la /Users/zhengzihao/Desktop/Personal/joshbushdash.github.io/_sass/
