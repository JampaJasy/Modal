<script>
// Pak de Modal
var modal = document.getElementById('Modal');

// Button die de modal openmaakt
var btn = document.getElementById("Button");

// De span element die de modal closed
var span = document.getElementsByClassName("close")[0];

// open
btn.onclick = function() {
    modal.style.display = "block";
}

// close
span.onclick = function() {
    modal.style.display = "none";
}

// Alles rondom de modal is gelijk aan close
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>