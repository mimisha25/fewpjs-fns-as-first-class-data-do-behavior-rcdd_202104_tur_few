/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */

/* Write your implementation of displayMessage() */
displayMessage("index.js", () => {
displayMessage("greet() function", () => {
    it("Returns Good Morning before 12pm", () => {
      expect(greet("8:40")).to.equal('Good Morning')
    })
    it("Returns Good Afternoon between 12pm and 5pm ", () => {
      expect(greet("14:21")).to.equal('Good Afternoon')
    })
    it("Returns Good Evening after 5pm", () => {
      expect(greet("19:00")).to.equal('Good Evening')
    })
  })
