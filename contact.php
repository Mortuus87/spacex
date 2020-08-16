<!DOCTYPE html>
<html lang="en">

<head>
  <?php include("includes/components/head.php"); ?>
  <title>SpaceX Microsite</title>
</head>

<body>
  <?php include("includes/components/header.php"); ?>
  <main id="contact">
    <section class="container narrow">
      <h1>Contact</h1>
      <p>feel free to leave a message below</p>
      
      <form action="POST" class="form">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
        <label for="email">E-mail (required)</label>
        <input type=text id="email" name="e-mail" placeholder="e.g. name@email.com" required>
        <label for="message">Leave your message here:</label>
        <textarea name="message" id="message" cols="30" rows="10" maxlength="3000" placeholder="Leave a short message here"></textarea>
        <button type="submit">Send message</button>
      </form>


    </section>
  </main>
</body>

<?php include("includes/components/footer.php"); ?>

</html>