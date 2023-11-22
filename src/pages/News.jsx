import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import styled from 'styled-components';

const Background = styled.div`
  height: 100%;
  background: #053B50;
  background-image: linear-gradient(to bottom right, #053B50, 85%, #32C6DA);
  background-repeat: no-repeat;
`;

const CommonNavbar = styled.div`
  border-bottom: 1px solid #ccc;
  background: #053B50;
`;
const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;

const NewsBox = styled.div`
  width: 30%;
  margin: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const NewsTitle = styled.a`
  text-decoration: none;
  color: #053B50;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover {
    color: #32C6DA;
  }
`;

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = '2cb5529860e64aa9a790a3d769497a43'; // Replace with your News API key
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
        const response = await axios.get(apiUrl);

        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
 <CommonNavbar>
        <Navbar />
      </CommonNavbar>
      <Background>
      <h1 class="flex items-center justify-center text-5xl font-outfit text-white">Financial News</h1>
        <BoxContainer>
          {articles.map((article, index) => (
            <NewsBox key={index}>
              <img src={article.urlToImage} alt={article.title} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
              <NewsTitle href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </NewsTitle>
            </NewsBox>
          ))}
        </BoxContainer>
      </Background>
    </div>
  );
};

export default News;
