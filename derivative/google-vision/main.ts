const derivative:Derivative = async ({row,ref,db,storage,auth})=>{
    const vision = require('@google-cloud/vision');
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
    let url = row.receiptImage[0].downloadURL
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const dataBuffer = new Buffer(arrayBuffer)
    const [result] = await client.textDetection(dataBuffer);
    
    return result.textAnnotations[0].description
  }