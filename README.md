# Camp Peach

A static website for Camp Peach, providing information about the camp, registration, past activities, and more.

## Description

This project contains the HTML, CSS, and JavaScript files for the Camp Peach website. It's a static site that can be served locally or deployed to any static hosting service.

## Features

- Home page with camp overview
- About page
- Contact information
- Registration details
- Past activities and photos
- Responsive design

## Getting Started

### Prerequisites

- A web server or static file server (e.g., Python, Node.js, or static-web-server)

### Using in VS Code

This project includes VS Code tasks for easy local development.

1. Open the project in VS Code.
2. Open the Command Palette (Ctrl+Shift+P) and select "Tasks: Run Task".
3. Choose one of the serve tasks:
   - "Serve (python):start" to start the Python server
   - "Serve (static-web-server):start" to start with static-web-server
4. The site will be available at the specified URL (check the terminal output for the exact address).

### Running Locally

You can serve the site locally using Python's built-in server or static-web-server.

#### Using Python

```bash
python3 -m http.server 8000 --directory .
```

Then open http://127.0.0.1:8000/html/index.html in your browser.

#### Using static-web-server

Install static-web-server and run:

```bash
static-web-server -w ./.config/static-web-server.toml
```

### Project Structure

- `html/`: HTML pages
  - `index.html`: Home page
  - `about.html`: About the camp
  - `contact.html`: Contact info
  - `info.html`: Information
  - `past.html`: Past activities
  - `regi.html`: Registration
- `css/`: Stylesheets
- `js/`: JavaScript files
- `assets/`: Images and other assets

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
