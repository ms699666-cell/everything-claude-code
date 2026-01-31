import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/lectures', (req, res) => {
  const lectures = [
    {
      id: 1,
      subject: 'हिंदी',
      title: 'कविता: दोहे',
      content: 'दोहे कविता का एक महत्वपूर्ण रूप है। इसमें दो पंक्तियाँ होती हैं जिनमें गहरी शिक्षा या ज्ञान होता है।'
    },
    {
      id: 2,
      subject: 'गणित',
      title: 'त्रिकोणमिति',
      content: 'त्रिकोणमिति में त्रिभुज के कोणों और भुजाओं के बीच संबंधों का अध्ययन किया जाता है।'
    },
    {
      id: 3,
      subject: 'विज्ञान',
      title: 'रासायनिक अभिक्रियाएँ',
      content: 'रासायनिक अभिक्रियाएँ में पदार्थों के बीच परिवर्तन होता है जिसमें नए पदार्थ बनते हैं।'
    },
    {
      id: 4,
      subject: 'सामाजिक विज्ञान',
      title: 'भारतीय संविधान',
      content: 'भारतीय संविधान विश्व का सबसे बड़ा लिखित संविधान है जिसमें 448 अनुच्छेद हैं।'
    }
  ];
  res.json(lectures);
});

app.listen(PORT, () => {
  console.log(`Lecture app running on http://localhost:${PORT}`);
});