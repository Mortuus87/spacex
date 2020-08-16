<header id="header">
  <div class="container">
    <nav class="menu">
      <ul>
        <?php 
          $fullUri = $_SERVER["REQUEST_URI"];
          $site = '/spacex';
        ?>
        <li>
          <a class="<?php echo $fullUri == $site.'/index.php' ? 'active' : 'inactive'; ?>" href="index.php">Next Launch</a>
        </li>
        <li>
          <a class="<?php echo $fullUri == $site.'/past.php' ? 'active' : 'inactive' ?>" href="past.php">Past Launches</a>
        </li>
        <li>
          <a class="<?php echo $fullUri == $site.'/about.php' ? 'active' : 'inactive' ?>" href="about.php">About</a>
        </li>
        <li>
          <a class="<?php echo $fullUri == $site.'/contact.php' ? 'active' : 'inactive' ?>" href="contact.php">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</header>