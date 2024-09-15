export const funEmojis = ["😀", "😂", "😍", "🥺", "😎", "😢", "😡", "👍", "👋", "🙏",
  "🎉", "🎂", "🔥", "🌈", "🚀", "🌟", "🍎", "🍕", "🌍", "💡"];


  export const randomEmojis = () =>{
    return funEmojis[Math.floor(Math.random()* funEmojis.length)];
  };