Browser("Edgewords Shop – e-commerce").Page("Edgewords Shop – e-commerce").WebEdit("s").Set "cap" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Edgewords Shop – e-commerce").Page("Edgewords Shop – e-commerce").WebButton("Search").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Edgewords Shop – e-commerce").Page("Cap – Edgewords Shop").WebButton("Add to cart").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Edgewords Shop – e-commerce").Page("Cap – Edgewords Shop").Link("View cart").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Edgewords Shop – e-commerce").Page("Cart – Edgewords Shop").WebTable("Product").Check CheckPoint("Product") @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Edgewords Shop – e-commerce").Close
