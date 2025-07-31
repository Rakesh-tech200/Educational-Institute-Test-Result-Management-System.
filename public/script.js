
function showLogin(role) {
    var modal = document.getElementById('id01');
    modal.style.display = 'block';
  
  
    var roleSelect = document.getElementById('role');
    if (role === 'Student') {
      roleSelect.value = 'student';
    } else if (role === 'Teacher') {
      roleSelect.value = 'teacher';
    }
  }
 
  document.querySelector('.modal-content form').onsubmit = function(event) {
    event.preventDefault();  
  

    var username = document.querySelector('input[name="uname"]').value;
    var password = document.querySelector('input[name="psw"]').value;
    var role = document.querySelector('select[name="role"]').value;
  

    if (username === '' || password === '') {
      alert('Please fill in all fields.');
      return;
    }
  
   
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
       
        let validUser = false;
        if (role === 'student') {
          validUser = data.students.some(student => student.username === username && student.password === password);
        } else if (role === 'teacher') {
          validUser = data.teachers.some(teacher => teacher.username === username && teacher.password === password);
        }
  

        if (validUser) {
          alert(`${role.charAt(0).toUpperCase() + role.slice(1)} Login Successful`);
       
          if (role === 'student') {
            window.location.href = 'C:\Users\User\OneDrive\Desktop\final\public\student-dashboard.html';  
          } else if (role === 'teacher') {
            window.location.href = 'C:\Users\User\OneDrive\Desktop\final\public\teacher-dashboard.html'; 
          }
        } else {
          alert('Invalid credentials');
        }
      })
      .catch(err => {
        console.error('Error loading data.json:', err);
        alert('Error during login. Please try again later.');
      });
  
   
    document.getElementById('id01').style.display = 'none';
  };
  

  window.onclick = function(event) {
    var modal = document.getElementById('id01');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  
