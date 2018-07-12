import { Component, OnInit } from '@angular/core';

declare const $: any;
const md: any = {
  misc: {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0
  }
};

@Component({
  selector: 'app-fixedplugin',
  templateUrl: './fixedplugin.component.html',
  styleUrls: ['./fixedplugin.component.css']
})
export class FixedpluginComponent implements OnInit {
  sidebarMini: boolean;
  sidebarImage: boolean;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem("tecmicro-sidebar-mini") == null) {
      localStorage.setItem("tecmicro-sidebar-mini", 'true');
      $('body').addClass('sidebar-mini');
      this.sidebarMini = true;
    } else {
      if (localStorage.getItem("tecmicro-sidebar-mini") === 'false') {
        $('body').removeClass('sidebar-mini');
        this.sidebarMini = false;
      } else {
        $('body').addClass('sidebar-mini');
        this.sidebarMini = true;
      } 
    }

    if (localStorage.getItem("tecmicro-sidebar-image") == null) {
      localStorage.setItem("tecmicro-sidebar-image", 'true');
      this.sidebarImage = true;
    } else {
      if (localStorage.getItem("tecmicro-sidebar-image") === 'false') {
        this.sidebarImage = false;
      } else {
        this.sidebarImage = true;
      } 
    }

    // fixed plugin
    const $sidebar = $('.sidebar');
    const $sidebar_img_container = $sidebar.find('.sidebar-background');

    if ($sidebar_img_container.length !== 0 && localStorage.getItem("tecmicro-sidebar-image") == "true") {
      $sidebar_img_container.fadeIn('fast');
      $sidebar.attr('data-image', '#');
    } else {
      $sidebar.removeAttr('data-image');
      $sidebar_img_container.fadeOut('fast');
    }

    const $full_page = $('.full-page');

    const $sidebar_responsive = $('body > .navbar-collapse');
    const window_width = $(window).width();

    const fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();

    if ( window_width > 767 && fixed_plugin_open === 'Dashboard' ) {
      if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
        $('.fixed-plugin .dropdown').addClass('open');
      }
    }

    $('.fixed-plugin a').click(function(event) {
      // Alex: if we click on switch, stop propagation of the event,
      // so the dropdown will not be hide, otherwise we set the  section active
      if ($(this).hasClass('switch-trigger')) {
        if (event.stopPropagation) {
          event.stopPropagation();
        } else if (window.event) {
          window.event.cancelBubble = true;
        }
      }
    });

    $('.fixed-plugin .active-color span').click(function() {
      const $full_page_background = $('.full-page-background');

      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      const new_color = $(this).data('color');

      if ($sidebar.length !== 0) {
        $sidebar.attr('data-color', new_color);
      }

      if ($full_page.length !== 0) {
        $full_page.attr('filter-color', new_color);
      }

      if ($sidebar_responsive.length !== 0) {
        $sidebar_responsive.attr('data-color', new_color);
      }

      localStorage.removeItem("tecmicro-sidebar-color");
      localStorage.setItem("tecmicro-sidebar-color", new_color);
    });

    $('.fixed-plugin .background-color span').click(function() {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      const new_color = $(this).data('color');

      if ($sidebar.length !== 0) {
        $sidebar.attr('data-background-color', new_color);
      }

      localStorage.removeItem("tecmicro-sidebar-bg");
      localStorage.setItem("tecmicro-sidebar-bg", new_color);
    });

    $('.fixed-plugin .img-holder').click(function() {
      const $full_page_background = $('.full-page-background');

      $(this).parent('li').siblings().removeClass('active');
      $(this).parent('li').addClass('active');

      let new_image = $(this).find('img').attr('src');

      if ( $sidebar_img_container.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0 ) {
        $sidebar_img_container.fadeOut('fast', function() {
          $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
          $sidebar_img_container.fadeIn('fast');
        });
      }

      if ($full_page_background.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0 ) {
        const new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

        $full_page_background.fadeOut('fast', function(){
          $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
          $full_page_background.fadeIn('fast');
        });
      }

      if ( $('.switch-sidebar-image input:checked').length === 0 ) {
        new_image = $('.fixed-plugin li.active .img-holder').find('img').attr('src');
        const new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

        $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
        $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
      }

      if ($sidebar_responsive.length !== 0) {
        $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
      }
    });

    $('.switch-sidebar-image input').change(function() {
      const $full_page_background = $('.full-page-background');
      const $input = $(this);

      if ($input.is(':checked')) {
        if ($sidebar_img_container.length !== 0) {
          $sidebar_img_container.fadeIn('fast');
          $sidebar.attr('data-image', '#');
        }

        if ($full_page_background.length !== 0) {
          $full_page_background.fadeIn('fast');
          $full_page.attr('data-image', '#');
        }

        localStorage.removeItem("tecmicro-sidebar-image");
        localStorage.setItem("tecmicro-sidebar-image", 'true');
        const background_image = true;
      } else {
        if ($sidebar_img_container.length !== 0) {
          $sidebar.removeAttr('data-image');
          $sidebar_img_container.fadeOut('fast');
        }

        if ($full_page_background.length !== 0) {
          $full_page.removeAttr('data-image', '#');
          $full_page_background.fadeOut('fast');
        }

        localStorage.removeItem("tecmicro-sidebar-image");
        localStorage.setItem("tecmicro-sidebar-image", 'false');
        const background_image = false;
      }
    });  
  }

  toggleSidebarMini() {
    if (this.sidebarMini == true) {
      $('body').removeClass('sidebar-mini');
      this.sidebarMini = false;

      localStorage.removeItem("tecmicro-sidebar-mini");
      localStorage.setItem("tecmicro-sidebar-mini", 'false');
    } else {
      this.sidebarMini = true;
      setTimeout(function() {
        $('body').addClass('sidebar-mini');

        $('.sidebar .collapse').css('height', 'auto');
        
        localStorage.removeItem("tecmicro-sidebar-mini");
        localStorage.setItem("tecmicro-sidebar-mini", 'true');
      }, 300);
    }
  }
}
