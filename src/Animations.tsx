import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const acc = document.getElementsByClassName('accordion') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        const pannel = this.nextElementSibling as HTMLElement;
        const line = pannel.nextElementSibling as HTMLElement;
        const icon = this.querySelector('.fa-chevron-down') as HTMLElement;

        if (pannel?.classList.contains('active')) {
          pannel.style.maxHeight = '0';
          pannel.style.paddingTop = '0';
          line.classList.remove('active');
          icon.style.transform = 'rotate(0deg)';
          setTimeout(() => {
            pannel.classList.remove('active');
            pannel.style.display = 'none';
          }, 500);
        } else {
          pannel.style.display = 'block';
          pannel.style.maxHeight = '0';
          setTimeout(() => {
            pannel.classList.add('active');
            line.classList.add('active');
            pannel.style.maxHeight = pannel.scrollHeight + 'px';
            pannel.style.paddingTop = '10px';
            icon.style.transform = 'rotate(180deg)';
          }, 10);
        }
      });
    }
  }, []);

  const swapBooks = (clickedBook: number) => {
    const book1 = document.querySelector('.book1') as HTMLElement;
    const book2 = document.querySelector('.book2') as HTMLElement;
    const book3 = document.querySelector('.book3') as HTMLElement;

    if (clickedBook === 1) {
      book1.style.transform = 'translate(-50%, -50%) scale(4)';
      book1.style.left = '35%';
      book1.style.top = '15%';

      book3.style.transform = 'translate(0, -50%) scale(2)';
      book3.style.left = '10%';
      book3.style.top = '55%';

      book2.style.transform = 'translate(0, 0) scale(2)';
      book2.style.left = '10%';
      book2.style.top = '10%';

      book1.className = 'book book3';
      book2.className = 'book book1';
      book3.className = 'book book2';
    } else if (clickedBook === 2) {
      book2.style.transform = 'translate(-50%, -50%) scale(4)';
      book2.style.left = '35%';
      book2.style.top = '15%';

      book1.style.transform = 'translate(0, -50%) scale(2)';
      book1.style.left = '10%';
      book1.style.top = '55%';

      book3.style.transform = 'translate(0, 0) scale(2)';
      book3.style.left = '10%';
      book3.style.top = '10%';

      book2.className = 'book book3';
      book3.className = 'book book1';
      book1.className = 'book book2';
    }

    manageClickableBooks();
  };

  const manageClickableBooks = () => {
    const book3 = document.querySelector('.book3') as HTMLElement;
    const book1 = document.querySelector('.book1') as HTMLElement;
    const book2 = document.querySelector('.book2') as HTMLElement;

    book3.onclick = null;

    book1.onclick = () => {
      swapBooks(1);
    };

    book2.onclick = () => {
      swapBooks(2);
    };
  };

  useEffect(() => {
    manageClickableBooks();
  }, []);

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger') as HTMLElement;
    const navLinks = document.querySelector('.nav-links') as HTMLElement;

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }, []);



  return (
    <div>
      {/* Component JSX content */}
    </div>
  );
};

export default MyComponent;
