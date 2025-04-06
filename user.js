<script>
  const editBtn = document.getElementById('editBtn');
  const inputs = document.querySelectorAll('#userForm input');
  let editing = false;

  editBtn.addEventListener('click', () => {
    editing = !editing;
    inputs.forEach(input => input.disabled = !editing);
    editBtn.textContent = editing ? 'Save' : 'Edit Info';
    
    // Optional: Save to localStorage or show confirmation here
  });
</script>
