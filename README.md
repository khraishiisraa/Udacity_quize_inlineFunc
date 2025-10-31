# Udacity_quize_inlineFunc
In this Java Script file I Build triangle with stars * 🎇 Using inline (nested) functions.

📙 Explanation:
Inline function:function defined and used directly within an expression - often inside another function call .

It’s usually an anonymous function written in calling place.

🧠 How the Code Works
1. Main Function: buildTriangle(length)

This is the main function that:

Takes one argument: length (the number of rows in the triangle).

Builds and returns a triangle shape made of stars (*)

2. Inline Function: makeLine(length, noNewLine = false)

Inside buildTriangle, there’s another function called makeLine().
This inline (inner) function creates one line of stars based on the given length.

length: how many stars to draw in that line.

noNewLine: a flag (true/false) to control whether to add a newline (\n) at the end

3. Building the Full Triangle

A for loop runs from 1 to length, calling makeLine() each time to build each row.

🖨️ Output

Finally, the completed triangle is returned and printed to the console

<img width="652" height="360" alt="image" src="https://github.com/user-attachments/assets/cf33bb3b-2a19-4c83-9ee5-686bf61dd4a3" />
