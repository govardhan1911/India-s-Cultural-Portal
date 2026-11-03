const API_BASE_URL = "http://localhost:8080/api";

// ==================== STATES ====================

// GET all states
export const getStates = async () => {
    const response = await fetch(`${API_BASE_URL}/states`);

    if (!response.ok) {
        throw new Error("Failed to fetch states");
    }

    return response.json();
};

// GET one state by ID
export const getStateById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/states/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch state");
    }

    return response.json();
};


// ==================== FESTIVALS ====================

// GET all festivals
export const getFestivals = async () => {
    const response = await fetch(`${API_BASE_URL}/festivals`);

    if (!response.ok) {
        throw new Error("Failed to fetch festivals");
    }

    return response.json();
};

// GET festivals by state
export const getFestivalsByState = async (stateId) => {
    const response = await fetch(
        `${API_BASE_URL}/festivals/state/${stateId}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch festivals for state");
    }

    return response.json();
};

// GET one festival by ID
export const getFestivalById = async (id) => {
    const response = await fetch(
        `${API_BASE_URL}/festivals/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch festival");
    }

    return response.json();
};


// ==================== FOODS ====================

// GET all foods
export const getFoods = async () => {
    const response = await fetch(`${API_BASE_URL}/foods`);

    if (!response.ok) {
        throw new Error("Failed to fetch foods");
    }

    return response.json();
};

// GET foods by state
export const getFoodsByState = async (stateId) => {
    const response = await fetch(
        `${API_BASE_URL}/foods/state/${stateId}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch foods for state");
    }

    return response.json();
};

// GET one food by ID
export const getFoodById = async (id) => {
    const response = await fetch(
        `${API_BASE_URL}/foods/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch food");
    }

    return response.json();
};


// ==================== HERITAGE ====================

// GET all heritage
export const getHeritage = async () => {
    const response = await fetch(`${API_BASE_URL}/heritage`);

    if (!response.ok) {
        throw new Error("Failed to fetch heritage");
    }

    return response.json();
};

// GET heritage by state
export const getHeritageByState = async (stateId) => {
    const response = await fetch(
        `${API_BASE_URL}/heritage/state/${stateId}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch heritage for state");
    }

    return response.json();
};

// GET one heritage by ID
export const getHeritageById = async (id) => {
    const response = await fetch(
        `${API_BASE_URL}/heritage/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch heritage");
    }

    return response.json();
};


// ==================== TOURISM ====================

// GET all tourism
export const getTourism = async () => {
    const response = await fetch(`${API_BASE_URL}/tourism`);

    if (!response.ok) {
        throw new Error("Failed to fetch tourism");
    }

    return response.json();
};

// GET tourism by state
export const getTourismByState = async (stateId) => {
    const response = await fetch(
        `${API_BASE_URL}/tourism/state/${stateId}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch tourism for state");
    }

    return response.json();
};

// GET one tourism by ID
export const getTourismById = async (id) => {
    const response = await fetch(
        `${API_BASE_URL}/tourism/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch tourism");
    }

    return response.json();
};