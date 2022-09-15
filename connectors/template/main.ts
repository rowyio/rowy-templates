const connectorFunction: Connector = async ({query, row, user}) => {
  const items = [
    {
  id:"a",
  word:"apple",
  emoji:"🍎"
},
{
  id:"b",
  word:"banana",
  emoji:"🍌"
},
{
  id:"c",
  word:"cherry",
  emoji:"🍒"
},
{
  id:"d",
  word:"duck",
  emoji:"🦆"
},
{
  id:"e",
  word:"eggplant",
  emoji:"🍆"
},
{
  id:"f",
  word:"flower",
  emoji:"🌸"
},
{
  id:"g",
  word:"grape",
  emoji:"🍇"
}];
  return items.filter(i=> i.word.toLowerCase().startsWith(query.toLowerCase()))
};

