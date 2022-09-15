const derivative: Derivative = async ({ row, ref, db, storage, auth }) => {
  
    if(!row.word || row.word.length>50) return "Word is too long!";
    const openaiSecret = await rowy.secrets.get("openai")
    const response = await fetch("https://api.openai.com/v1/engines/text-davinci-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + openaiSecret
      },
      body: JSON.stringify({
        "prompt": `Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \n${row.word}:`,
        "temperature": 0.8,
        "max_tokens": 10,
        "top_p": 1.0,
        "frequency_penalty": 0.0,
        "presence_penalty": 0.0,
        "stop":"[\"\n\"]"
      })
    })
    const result = await response.json()
    return result.choices[0].text.replace(/['"\n]+/g, '')
  
  
  }