# AbstREACT Art

## Project Links

- [GitHub Repo](https://github.com/josiahse/abstreact-art)
- [Deployed Link]()

## Project Description

I had this idea to create randomized pixel art images. This project will use a React front-end and a Django back-end.

## Wireframes

- [Wireframe](https://imgur.com/a/Zpnawsi)
- [Example Art](https://imgur.com/a/rybPRwQ)

### MVP/PostMVP

#### MVP EXAMPLE

- Create React Framework
- Add user controlled size adjustments
- Allow users to save the images
- About page

#### PostMVP EXAMPLE

- Add the ability to download the images (would need to convert the html/css to .jpg or .png files somehow, have looked into dom-to-image library for this)
- Stretch PostMVP - pick 5 or so random images and turn them into a gif

## Components

| Component              |                   Description                    |
| ---------------------- | :----------------------------------------------: |
| App                    | Make data pull to django API to generate the art |
| Display                |                Displays the image                |
| Customize              |         Allows users to set width/height         |
| Header                 |              Includes Title and nav              |
| Sign-In/Create Account |           Possibly separate components           |
| Hamburger?             |        Might require a separate component        |

| Component          | Priority | Estimated Time | Actual Time |
| ------------------ | :------: | :------------: | :---------: |
| React Framework    |    H     |      3hrs      |     hrs     |
| React Routing      |    H     |      3hrs      |     hr      |
| Initial CSS Layout |    H     |      3hrs      |     hr      |
| Art Generation     |    H     |      1hrs      |     hr      |
| Linking/Routes     |    H     |      3hrs      |     hr      |
| About              |    H     |      2hrs      |     hr      |
| Image Gen          |    M     |     6 hrs      |     hr      |
| Gif Gen            |    L     |     6 hrs      |     hr      |
| Cleanup/Bug Fixes  |    H     |     4 hrs      |     hr      |
| Total              |    H     |     31hrs      |     hr      |

## Additional Libraries

Bootstrap, React, Django, possibly dom-to-image

## Code Snippet

Here's what I wrote to test the art generation. I may move part of this into a django backend (the creation of the colors list):

```
function App() {
	const color_hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f',];
	let color_list = [];
	for (let i = 0; i < 2500; i++) {
		let color_array = [];
		for (let j = 0; j < 6; j++) {
			color_array.push(color_hex[Math.floor(Math.random() * 16)]);
		}
		let color_str = color_array.join('');
		color_list.push(color_str);
	}

	let colorJsx = color_list.map((color) => (
		<div
			key={color}
			className='square'
			style={{ backgroundColor: `#${color}` }}></div>
	));


	return (
		<div className='App'>
			<article id="colorz">{colorJsx}</article>
		</div>
	);
}
```
