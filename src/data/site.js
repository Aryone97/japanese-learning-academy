// EDIT THIS FILE to update your academy, course catalog, schedules and registration integration.
export const academy = {
  name: 'Japanese Learning Academy',
  japaneseName: '日本語アカデミー',
  tagline: 'A gentler way to learn Japanese.',
  email: 'hello@example.com', // REPLACE before publishing; display placeholder only
  phone: '+95 XX XXX XXXX', // REPLACE before publishing
  address: 'Your academy address, Myanmar', // REPLACE before publishing
  facebook: '',
  telegram: '',
  registrationEndpoint: '', // Optional Formspree URL: https://formspree.io/f/yourFormId. Empty means demo-only.
}

export const courses = [
 {id:'n5',level:'N5',badge:'Beginner',japanese:'はじめの一歩',duration:'3–4 months',sessions:'3 days / week',format:'Online / In person*',color:'sage',summary:'Your first steps into Japanese: sounds, scripts, and everyday expressions.',topics:['Hiragana & Katakana','Essential beginner kanji','Basic particles & sentence patterns','Greetings and daily conversations','Foundational listening & reading'],outcomes:['Read kana with confidence','Introduce yourself and speak about everyday topics','Build a foundation for JLPT N5'],fee:'Contact for fees'},
 {id:'n4',level:'N4',badge:'Elementary',japanese:'もっと話そう',duration:'3–5 months',sessions:'3 days / week',format:'Online / In person*',color:'peach',summary:'Grow beyond the basics and express yourself in more real-life situations.',topics:['Elementary grammar and verb forms','Everyday vocabulary & kanji','Short passages and messages','Listening for main ideas','Practical conversation exercises'],outcomes:['Understand familiar situations','Read short, straightforward texts','Prepare for JLPT N4'],fee:'Contact for fees'},
 {id:'n3',level:'N3',badge:'Intermediate',japanese:'自信をつける',duration:'5–6 months',sessions:'3 days / week',format:'Online / In person*',color:'blue',summary:'Connect the dots between basic Japanese and natural communication.',topics:['Intermediate grammar patterns','Broader vocabulary & kanji','Everyday articles and explanations','Longer listening passages','Reading speed and comprehension'],outcomes:['Follow more natural conversations','Read moderately complex materials','Prepare for JLPT N3'],fee:'Contact for fees'},
 {id:'n2',level:'N2',badge:'Upper Intermediate',japanese:'次のステージへ',duration:'6–8 months',sessions:'3 days / week',format:'Online / In person*',color:'lavender',summary:'Sharpen your comprehension for advanced study, work, and daily life.',topics:['Advanced grammar structures','News and explanatory texts','Complex vocabulary & kanji','Listening at near-natural speed','Timed reading and exam strategy'],outcomes:['Interpret longer and more complex texts','Follow a wider range of speech','Prepare for JLPT N2'],fee:'Contact for fees'}
]

// Use real opening dates, days, times, and teacher details once confirmed.
export const classBatches = [
 {id:'b1',level:'N5',name:'N5 • Morning Class',days:'Mon / Wed / Fri',time:'09:00 – 10:30',start:'To be announced',mode:'Online',status:'Planned'},
 {id:'b2',level:'N5',name:'N5 • Evening Class',days:'Tue / Thu / Sat',time:'18:00 – 19:30',start:'To be announced',mode:'Online',status:'Planned'},
 {id:'b3',level:'N4',name:'N4 • Evening Class',days:'Mon / Wed / Fri',time:'18:00 – 19:30',start:'To be announced',mode:'Online',status:'Planned'},
 {id:'b4',level:'N3',name:'N3 • Weekend Class',days:'Saturday / Sunday',time:'10:00 – 12:00',start:'To be announced',mode:'Online',status:'Planned'},
 {id:'b5',level:'N2',name:'N2 • Weekend Class',days:'Saturday / Sunday',time:'14:00 – 16:00',start:'To be announced',mode:'Online',status:'Planned'},
]
