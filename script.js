body {
  font-family: Arial;
  background: pink;
  text-align: center;
}

h1 {
  margin-top: 30px;
  color: #b3003c;
}

.book {
  width: 320px;
  height: 420px;
  margin: 50px auto;
  position: relative;
  perspective: 2000px;
}

.page {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: left;
  transition: transform 1s;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  padding: 40px 20px;
  box-sizing: border-box;
}

.cover {
  background: #ff4d88;
  color: white;
}

.page h2 {
  color: #cc0052;
}

.page p {
  font-size: 20px;
  margin-top: 20px;
}

.page button {
  margin-top: 30px;
  padding: 12px 25px;
  border: none;
  border-radius: 10px;
  background: #ff0066;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.flipped {
  transform: rotateY(-180deg);
}
