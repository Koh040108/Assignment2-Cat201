.culture-section {
    padding: 40px;
    background-color: #f9f9f9;
    text-align: center;
}

.culture-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.culture-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
}

.culture-card:hover {
    transform: translateY(-5px);
}

.culture-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

h3 {
    margin: 10px 0;
    color: #333;
}

p {
    color: #666;
    font-size: 14px;
    padding: 0 10px 10px;
}
