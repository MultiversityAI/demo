export let assistantId = "asst_fbYoOFVvn1YpeUt0ig3GEqVU"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
