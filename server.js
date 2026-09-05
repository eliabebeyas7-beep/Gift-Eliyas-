const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.get('/health',(req,res)=>res.json({ok:true}));
app.post('/api/gift',(req,res)=>{
  const amount = Number(req.body.amount);
  const name = String(req.body.name || '').trim();
  if (!Number.isFinite(amount) || amount < 1) return res.status(400).json({error:'Please enter a valid amount.'});
  res.json({ok:true, amount, name});
});
app.listen(PORT,'0.0.0.0',()=>console.log(`Gift Eliyas running on port ${PORT}`));
