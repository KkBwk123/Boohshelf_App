document.addEventListener("DOMContentLoaded", function () {
  const formInput = document.getElementById("inputBook");
  const formSearch = document.getElementById("searchBook");

  // FUNGSI UNTUK FORM INPUT KETIKA DIKLIK
  formInput.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();

    // FUNGSI MENGEMBALIKAN FORM INPUT MENJADI KOSONG SAAT LAMAN DILOAD
    document.getElementById("inputBookTitle").value = "";
    document.getElementById("inputBookAuthor").value = "";
    document.getElementById("inputBookYear").value = "";
    document.getElementById("inputBookIsComplete").checked = false;
  });

  // FUNGSI UNTUK FORM SEARCH KETIKA DIKLIK
  formSearch.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputSearch = document.getElementById("searchBookTitle").value;
    bookSearch(inputSearch);
  });

  if (isStorageSupported()) {
    fetchJson();
  }
});

document.addEventListener("onjsonfetched", function () {
  renderFromBooks();
});
