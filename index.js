document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const countyViewer = document.getElementById('county-viewer');
    const countiesContainer = document.getElementById('counties-container');
    const allocationAmount = document.getElementById('allocation-amount');
    const allocateBtn = document.getElementById('allocate-btn');
    const comment = document.getElementById('comment');
    
    let counties = [];
    let selectedCounty = null;

    function init() {
        loadCounties();
        setupEventListeners();
    }
    function loadCounties() {
        fetch('db.json')
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Could not quite fulfill your request mate');
                }
            })
            .then(function(data) {
                console.log(' Gotten data:', data); 
                if (data.counties) {
                    counties = data.counties;
                    displayCounties(counties);
                } else {
                    throw new Error('Invalid data structure: counties property missing');
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
                countiesContainer.innerHTML = `<div class="error">Error loading county data</div>`;
            });
    }

    function displayCounties(countiesToDisplay) {
        countiesContainer.innerHTML = '';

        if (countiesToDisplay.length === 0) {
            countiesContainer.innerHTML = '<div class="no-results">Retry county name</div>';
            return;
        }

        countiesToDisplay.forEach(function(county) {
            const card = document.createElement('div');
            card.className = 'county-card';
            card.dataset.id = county.id;
            card.innerHTML = `
            <h3>${county.name}</h3>
            <div>Allocated: KSH ${county.allocated.toLocaleString()}</div>
            <div>Population: ${county.population.toLocaleString()}</div>
            <div>Region: ${county.region}</div>
            `;

            card.addEventListener('click', function() {
                selectCounty(county);
            });
            countiesContainer.appendChild(card);
        });
    }

    function selectCounty(county) {
        document.querySelectorAll('.county-card').forEach(card => {
            card.classList.remove('active');
        });

        const selectedCard = document.querySelector(`.county-card[data-id="${county.id}"]`);
        if (selectedCard) selectedCard.classList.add('active');

        selectedCounty = county;
        countyViewer.value = `${county.name} (${county.region})`;

        const detailsHTML = `
            <div>County ID: ${county.id}</div>
            <div>Progress: ${county.progress}</div>
            <div>Allocated Funds: KSH ${county.allocated.toLocaleString()}</div>
            <div>Population: ${county.population.toLocaleString()}</div>
            <div>Last Allocation: ${county.lastAllocated || 'Never'}</div>
        `;

        let detailsContainer = document.querySelector('.county-details');
        if (!detailsContainer) {
            detailsContainer = document.createElement('div');
            detailsContainer.className = 'county-details';
            countyViewer.insertAdjacentElement('afterend', detailsContainer);
        }
        detailsContainer.innerHTML = detailsHTML;

    }

    function allocateFunds() {
        if (!selectedCounty) {
            alert('Please do select a county first mate');
            return;
        }

        const amount = parseFloat(allocationAmount.value);
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount');
            return;
        }

        selectedCounty.allocated += amount;
        selectedCounty.lastAllocated = new Date().toLocaleString();



        selectCounty(selectedCounty);
        displayCounties(counties);

        // alert(`Successfully allocated KSH ${amount.toLocaleString()} to ${selectedCounty.name}`); --> I had this prompt an alert but instead let it display direct
        
        allocationAmount.value = '';
    }

    function searchCounties() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const theCounties = counties.filter(county => {
            return county.name.toLowerCase().includes(searchTerm) || 
                   county.region.toLowerCase().includes(searchTerm);
        });
        displayCounties(theCounties);
    }

    function setupEventListeners() {
        searchBtn.addEventListener('click', searchCounties);
        searchInput.addEventListener('keyup', event => {
            if (event.key === 'Enter') searchCounties();
        });
        allocateBtn.addEventListener('click', allocateFunds);
    }

    init();
});