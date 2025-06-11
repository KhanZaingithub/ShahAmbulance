<header class="main-header header-style-one">

            <!--Start Header Top-->
            <div class="header-top">
                <div class="auto-container">
                    <div class="outer-box">

                        <div class="header-top__left">
                            <div class="main-logo-box">
                                <a href="index.php">
                                    <img src="assets/images/resources/logo.png" alt="Awesome Logo" title="">
                                </a>
                            </div>
                        </div>

                        <div class="header-top__right">
                            <div class="header-contact-info-style1">
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-telephone"></span>
                                        </div>
                                        <div class="text">
                                            <p>Call anytime</p>
                                            <h5><a href="tel:9920963000">9920963000</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-email"></span>
                                        </div>
                                        <div class="text">
                                            <p>Write email</p>
                                            <h5><a href="mailto:shahambulanceservice24x7@gmail.com">shahambulanceservice24x7@gmail.com</a></h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="header-button-style1">
                                <a class="btn-one" href="#" data-toggle="modal" data-target="#bookambulancemumbai">
                                    <span class="txt">BOOK AN AMBULANCE</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!--End Header Top-->

            <!--Start Header-->
            <div class="header">
                <div class="auto-container">
                    <div class="outer-box">

                        <!--Start Header Left-->
                        <div class="header-left">
                            <div class="nav-outer style1 clearfix">
                                <!--Mobile Navigation Toggler-->
                                <div class="mobile-nav-toggler">
                                    <div class="inner">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </div>
                                </div>
                                <!-- Main Menu -->
                                <nav class="main-menu style1 navbar-expand-md navbar-light">
                                    <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul class="navigation clearfix">
                                        
                                         <?php $currentPage = basename($_SERVER['REQUEST_URI']); ?>
                                        
                                            <li class="current" <?php if($currentPage == 'index.php') echo 'class="current"'; ?>><a href="index.php">Home</a></li>
                                            
                                            <li class="dropdown" <?php if($currentPage == 'shah-ambulance-services.php') echo 'class="active"'; ?>><a href="shah-ambulance-services.php">Ambulance Services</a>
                                                <ul>
                                                    <li><a href="bls-ambulance.php">Basic Life Support Ambulance</a></li>
                                                    <li><a href="cardiac-ambulance-service.php">Cardiac Ambulance</a></li>
                                                    <li><a href="train-ambulance-service.php">Train Ambulance</a></li>
                                                    <li><a href="air-ambulance-service.php">Air Ambulance</a></li>
                                                    <li><a href="ambulances-for-events.php">Ambulance for Events</a></li>
                                                    <li><a href="hearse-van-service.php">Hearse Van</a></li>
                                                   
                                                </ul>
                                            </li>
                                            
                                            <li class="dropdown" <?php if($currentPage == 'funeral-services.php') echo 'class="current"'; ?>><a href="funeral-services.php">Funeral Services</a>
                                                <ul>
                                                    <li><a href="funeral-service-mumbai.php">Funeral Services</a></li>
                                                    <li><a href="antim-sanskar-seva-mumbai.php">Antim Sanskar Seva</a></li>
                                                    <li><a href="cremation-service.php">Cremation Service</a></li>
                                                    <li><a href="last-rites-services-mumbai.php">Last Rites Services</a></li>
                                                    <li><a href="hearse-van-for-dead-body-transfer.php">Hearse Van</a></li>
                                                    <li><a href="freezer-box-services.php">Freezer Box</a></li>
                                                   
                                                </ul>
                                            </li>
                                            
                                            <li class="" <?php if($currentPage == 'about-us.php') echo 'class="current"'; ?>><a href="about-us.php">About us</a></li>
                                            
                                            <?php /*?><li class="" <?php if($currentPage == 'Blog.php') echo 'class="current"'; ?>><a href="#">Blog</a></li><?php */?>
                                            <li class="" <?php if($currentPage == 'pay.php') echo 'class="current"'; ?>><a href="pay.php">Pay Online</a></li>
                                            <li class="" <?php if($currentPage == 'contact-us.php') echo 'class="current"'; ?>><a href="contact-us.php">Contact us</a></li>
                                           
                                        </ul>
                                    </div>
                                </nav>
                                <!-- Main Menu End-->
                            </div>
                        </div>
                        <!--End Header Left-->

                        <!--Start Header Right-->
                        <div class="header-right">
                            <div class="header-social-link">
                                <ul class="clearfix">
                                    <li>
                                        <a href="#"><i class="icon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="icon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="icon-pinterest"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="icon-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--End Header Right-->

                    </div>
                </div>
            </div>
            <!--End header-->

            <!--Sticky Header-->
            <div class="sticky-header">
                <div class="container">
                    <div class="clearfix">
                        <!--Logo-->
                        <div class="logo float-left">
                            <a href="index.php" class="img-responsive">
                                <img src="assets/images/resources/sticky-logo.png" alt="" title="Shah Ambulance Service">
                            </a>
                        </div>
                        <!--Right Col-->
                        <div class="right-col float-right">
                            <!-- Main Menu -->
                            <nav class="main-menu clearfix">
                                <!--Keep This Empty / Menu will come through Javascript-->
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <!--End Sticky Header-->

            <!-- Mobile Menu  -->
            <div class="mobile-menu">
                <div class="menu-backdrop"></div>
                <div class="close-btn"><span class="icon fa fa-times-circle"></span></div>
                <nav class="menu-box">
                    <div class="nav-logo"><a href="index.php"><img src="assets/images/resources/footer-logo.png" alt="" title="Shah Ambulance Service"></a></div>
                    <div class="menu-outer">
                        <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                    </div>
                    <!--Social Links-->
                    <div class="social-links">
                        <ul class="clearfix">
                            <li><a href="#"><span class="fab fa fa-facebook-square"></span></a></li>
                            <li><a href="#"><span class="fab fa fa-twitter-square"></span></a></li>
                            <li><a href="#"><span class="fab fa fa-pinterest-square"></span></a></li>
                            <li><a href="#"><span class="fab fa fa-google-plus-square"></span></a></li>
                            <li><a href="#"><span class="fab fa fa-youtube-square"></span></a></li>
                        </ul>                       
                    </div>
                </nav>
            </div>
            <!-- End Mobile Menu -->

 </header>