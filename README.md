# Pesa kwa mfuko wa Mwananchi

Pesa kwa mfuko wa Mwananchi is an enhanced web application designed for allocating funds to counties in Kenya. It includes features like searching for counties, viewing detailed information about them, allocating funds, sorting counties, dark mode toggling, and more. This app is built with HTML, CSS, and JavaScript.

## Features

- **Search Counties**: Users can search for counties by name using a search bar.
- **Allocate Funds**: Allocate a specified amount of funds (in Kenyan Shillings) to a selected county.
- **Responsive Design**: The app is responsive and works well on both mobile and desktop devices.
- **County Details**: Display detailed information about a county when selected (e.g., population, area, etc.).
- **Reset Allocation**: Reset the allocation amount for a selected county.
- **Sort Counties**: Sort counties alphabetically or by population.
- **Pagination**: Display counties in a paginated list if there are too many counties to avoid overwhelming the user.
- **Dark Mode/Light Mode Toggle**: Switch between light and dark themes for improved user experience.

## Project Structure

- **index.html**: Contains the HTML structure of the page.
- **style.css**: Provides the styling for the app, including themes.
- **index.js**: Contains the JavaScript logic for interacting with the app, such as searching, allocating funds, and toggling themes.

## Getting Started

### Prerequisites

1. Ensure you have a web browser like Google Chrome, Mozilla Firefox, or Edge.
2. This project is static, meaning no backend server is required. The HTML, CSS, and JavaScript files can be opened directly in a browser.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/pesa-kwa-mfuko-wa-mwananchi.git
    ```

2. Navigate into the project directory:

    ```bash
    cd pesa-kwa-mfuko-wa-mwananchi
    ```

3. Open the `index.html` file in your preferred web browser to launch the app.

    ```bash
    open index.html  # Mac
    start index.html  # Windows
    ```

### Usage:

1. **Search Counties**: Type the name of a county in the search bar and click the "Search County" button to filter the counties by name.
2. **Select a County**: Click on a county name from the displayed list to select it. Detailed information (e.g., population, area) about the selected county will be displayed.
3. **Allocate Funds**: Enter an amount in the "Allocation Amount (KSH)" input and click "Allocate Funds" to allocate that amount to the selected county.
4. **Reset Allocation**: Click the "Reset Allocation" button to reset the allocation amount for the selected county.
5. **Sort Counties**: Use the sorting options to sort counties alphabetically or by population.
6. **Toggle Dark Mode**: Click the "Switch to Dark Mode" button to toggle between light and dark themes.

### Example

- **Search**: If you type "County 1" in the search bar, only counties that contain "County 1" in their name will be displayed.
- **Allocate Funds**: After selecting a county, you can allocate funds (e.g., "100,000 KSH") to the county. The allocated amount will be shown.
- **Sort Counties**: Sort counties alphabetically or by population to quickly find the county you're interested in.
- **Dark Mode**: Click the toggle button to switch between dark mode and light mode for a more comfortable viewing experience at night.

## Contributing

We welcome contributions! If you'd like to improve or enhance the functionality of this project, feel free to fork the repository, create a branch, and submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push to your branch: `git push origin feature-name`.
5. Open a pull request to merge your changes into the main branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

