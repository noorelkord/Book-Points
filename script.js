document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const booksContainer = document.getElementById('booksContainer');

    let books = [];

    // دالة لعرض الكتب في الصفحة
    function displayBooks() {
        booksContainer.innerHTML = '';
        if (books.length === 0) {
            booksContainer.innerHTML = '<p>لا توجد كتب مضافة بعد. ابدأ بإضافة كتابك الأول!</p>';
            return;
        }
        books.forEach((book, index) => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <div class="book-details">
                    <h3>${book.title}</h3>
                    <p>الكاتب: ${book.author}</p>
                    <p>النقاط: ${book.points} من 5</p>
                    <p>ملاحظات: ${book.notes || 'لا يوجد'}</p>
                </div>
                <button onclick="deleteBook(${index})">حذف</button>
            `;
            booksContainer.appendChild(bookItem);
        });
    }

    // دالة لإضافة كتاب جديد
    bookForm.addEventListener('submit', (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة
        const title = document.getElementById('bookTitle').value;
        const author = document.getElementById('bookAuthor').value;
        const points = document.getElementById('bookPoints').value;
        const notes = document.getElementById('bookNotes').value;

        const newBook = {
            title,
            author,
            points,
            notes
        };

        books.push(newBook);
        bookForm.reset(); // تفريغ الحقول
        displayBooks();
    });

    // دالة لحذف كتاب (يجب أن تكون عامة)
    window.deleteBook = (index) => {
        books.splice(index, 1);
        displayBooks();
    };

    // عرض الكتب عند تحميل الصفحة
    displayBooks();
});
