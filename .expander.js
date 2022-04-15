// Copyright ArtusMode Software, LLC
// T1398
// latest edit: 2021-10-06 9:35 PM EDT
// noinspection JSValidateTypes,JSUnresolvedVariable,JSUnusedAssignment,JSJQueryEfficiency,JSUnusedGlobalSymbols

export function useExpander() {
  // Copyright ArtusMode Software, LLC
  // T1398
  // latest edit: 2021-10-06 9:35 PM EDT

  let shortname = shortname === undefined ? '' : shortname // customer's AddOns.LA shortname
  let form = form === undefined ? 'horizontal' : form // name of the form to inject
  let initialHeight = initialHeight === undefined ? '800' : initialHeight // initial height (in px) of iFrame
  let innerDiv =
    innerDiv === undefined || innerDiv === '' ? 'innerDiv' : innerDiv // ID of element to inject the iFrame into
  let outerSelector = outerSelector === undefined ? '' : outerSelector // jQuery selector, ex: "#id" or ".class" or even ".class:first"
  let label = label === undefined ? '' : '&label=' + label // jQuery label GET parameter, only applies for some forms
  let css = css === undefined ? '' : '&css=' + css // integer ID of the custom CSS ID
  let standalone = standalone === undefined ? '&embedded' : '' // if standalone is set (to any value) we won't treat as embedded

  let target =
    'https://' +
    shortname +
    '.addons.la/leads/new/forms/' +
    form +
    '/?1' +
    css +
    label +
    standalone
  let original_element
  let load_id

  function loadScript(sScriptSrc, oCallback) {
    const oHead = document.getElementsByTagName('head')[0]
    const oScript = document.createElement('script')
    oScript.type = 'text/javascript'
    oScript.src = sScriptSrc
    // most browsers
    oScript.onload = oCallback
    // IE 6 & 7
    oScript.onreadystatechange = function () {
      if (this.readyState === 'complete') {
        oCallback()
      }
    }
    oHead.appendChild(oScript)
  }

  let this_script = null(function () {
    document.currentScript =
      document.currentScript ||
      (function () {
        const scripts = document.getElementsByTagName('script')
        return scripts[scripts.length - 1]
      })()
    this_script = document.currentScript
    shortname = this_script.src.substring(
      this_script.src.indexOf('//') + 2,
      this_script.src.indexOf('.')
    )

    if (!window.jQuery) {
      loadScript(
        'https://' + shortname + '.addons.la/js/jquery-1.10.2.min.js',
        function () {
          jQuery.noConflict()
          init()
        }
      )
    } else {
      init()
    }
  })()

  function load() {
    if (load_id) return // already recorded
    jQuery.ajax({
      url: 'https://' + shortname + '.addons.la/leads/new/forms/ajax/load.php',
      type: 'POST',
      method: 'POST',
      xhrFields: {
        withCredentials: true,
      },
      data: {
        form_url: target,
        loaded_url: window.location.href,
        referrer_url: document.referrer,
        user_agent: navigator.userAgent,
        dom: document.documentElement.outerHTML,
      },
      success: function (result) {
        console.log(result)
        if (result['success'] !== undefined) {
          target += '&load=' + result['success']
          load_id = result['success']
        }
        // Actually populate it
        if (innerDiv === '') innerDiv = 'artusmode_form_wrapper'
        let innerTarget = jQuery('#' + innerDiv) // this HAS to be "duplicated selector", see comments below
        if (innerTarget.length === 0) {
          jQuery('<div id="' + innerDiv + '"></div>').insertAfter(this_script) // since innerDiv isn't present we have to add it
          innerTarget = jQuery('#' + innerDiv) // now that it's been added, repopulate innerTarget, so it's no longer empty
        }
        innerTarget.html(
          '<iframe title="Lead Form" allowtransparency="true" allow="geolocation" style="width: 100%; height: ' +
            initialHeight +
            'px" src="' +
            target +
            '" id="artusmode_filecontainer"></iframe>'
        )

        setExitListener(result['success'])
      },
    })

    // prevents custom-scroll plugins from messing up iframe scrolling
    jQuery(document).ready(function () {
      setTimeout(function () {
        jQuery('html').css('overflow-y', 'scroll')
      }, 200)
      setTimeout(function () {
        jQuery('html').css('overflow-y', 'scroll')
      }, 2000) // second one with longer timeout in case first DOM isn't finished
    })
  }

  function init() {
    let first_load = true // prevent hijack on first page load
    let first_hijack = true // prevent hijack on first page load
    let get_string = ''
    const gets = [
      'l',
      'ak',
      'cl',
      'ref',
      'gclid',
      'fbclid',
      'msclkid',
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'forceautoquote',
      'pickup_address',
      'pickup_city',
      'pickup_state',
      'pickup_zip',
      'pickup_country',
      'pickup_latitude',
      'pickup_longitude',
      'dropoff_address',
      'dropoff_city',
      'dropoff_state',
      'dropoff_zip',
      'dropoff_country',
      'dropoff_latitude',
      'dropoff_longitude',
      'pickup_date',
      'pickup_time',
      'phone',
      'account',
      'promo',
      'customer_uuid',
      'lo',
      'agent',
    ]
    gets.forEach(function (element) {
      const temp = getUrlParameter(element)
      if (temp !== undefined && temp !== '')
        get_string += '&' + element + '=' + temp
      else if (
        typeof settings !== 'undefined' &&
        settings.element !== undefined
      )
        get_string += '&' + element + '=' + settings.element
      else if (element === 'cl' && typeof cl !== 'undefined')
        get_string += '&' + element + '=' + cl
      else if (element === 'ref' && typeof ref !== 'undefined')
        get_string += '&' + element + '=' + ref
    })
    get_string += '&url=' + encodeURIComponent(window.location.href)
    target += get_string

    let data
    if (this_script.getAttribute('config')) {
      const config_id = this_script.getAttribute('config')
      data = { id: config_id }
      const access_key = getUrlParameter('ak')
      if (access_key !== undefined && access_key !== '')
        data.access_key = access_key // T3015

      jQuery.ajax({
        url:
          'https://' + shortname + '.addons.la/leads/new/forms/ajax/config.php', // hitting this sets the system session values
        type: 'POST',
        method: 'POST',
        xhrFields: {
          withCredentials: true,
        },
        data: data,
        success: function (result) {
          let outerTarget
          console.log(result)
          if (result.error) {
            return
          }

          if (!localStorage.getItem('artusmode_session') && result.session)
            localStorage.setItem('artusmode_session', result.session)
          form = result.form !== undefined ? result.form : form
          initialHeight =
            result.initialHeight !== undefined
              ? result.initialHeight
              : initialHeight
          innerDiv = result.innerDiv !== undefined ? result.innerDiv : innerDiv
          outerSelector =
            result.outerSelector !== undefined
              ? result.outerSelector
              : outerSelector
          label = result.label !== undefined ? '&label=' + result.label : label
          css = result.css !== undefined ? '&css=' + result.css : css
          standalone =
            result.standalone !== undefined && result.standalone !== ''
              ? '&embedded'
              : standalone
          config = result.id !== undefined ? '&config=' + result.id : ''

          // T2557
          const artusmode = getUrlParameter('am')
          if (artusmode !== undefined && artusmode.length > 0) {
            // If selector not set, populate it
            if (outerSelector === undefined || outerSelector === '')
              outerSelector = '#artusmode_form_wrapper'
            outerTarget = jQuery(outerSelector)
            if (outerTarget.length === 0) {
              jQuery('<div id="artusmode_form_wrapper"></div>').insertAfter(
                this_script
              )
            }

            target = artusmode + '&embedded' // ALWAYS embedded
            jQuery(outerSelector).html(
              '<iframe title="Lead Form" allowtransparency="true" allow="geolocation" style="width: 100%; height: ' +
                initialHeight +
                'px" src="' +
                target +
                '" id="artusmode_filecontainer"></iframe>'
            )
            jQuery(outerSelector).attr('style', function (i, s) {
              return (s || '') + 'height: auto !important;'
            }) // T2521
            return
          }
          const shortlink = getUrlParameter('l')
          if (shortlink !== undefined && shortlink.length > 0) {
            // If selector not set, populate it
            if (outerSelector === undefined || outerSelector === '')
              outerSelector = '#artusmode_form_wrapper'
            outerTarget = jQuery(outerSelector)
            if (outerTarget.length === 0) {
              jQuery('<div id="artusmode_form_wrapper"></div>').insertAfter(
                this_script
              )
            }

            jQuery.ajax({
              url: 'https://' + shortname + '.addons.la/l/',
              method: 'GET',
              data: {
                k: shortlink,
                format: 'json',
              },
              success: function (result) {
                if (result.success) {
                  target = result.success.path + '&embedded' // ALWAYS embedded
                  jQuery(outerSelector).html(
                    '<iframe title="Lead Form" allowtransparency="true" allow="geolocation"  style="width: 100%; height: ' +
                      initialHeight +
                      'px" src="' +
                      target +
                      '" id="artusmode_filecontainer"></iframe>'
                  )
                  jQuery(outerSelector).attr('style', function (i, s) {
                    return (s || '') + 'height: auto !important;'
                  }) // T2521
                }
              },
            })
            return
          }

          // Re-build the URL, then load
          target =
            'https://' +
            shortname +
            '.addons.la/leads/new/forms/' +
            form +
            '/?1' +
            css +
            label +
            standalone +
            config
          target += get_string
          load()
        },
        error: function (result) {
          console.log('ERROR loading config: ' + result)
        },
      })
    } else load()

    window.addEventListener(
      'message',
      function (event) {
        if (event.origin === 'https://' + shortname + '.addons.la') {
          console.log('Received message: ' + event.data.message)
          const data = JSON.parse(event.data.message)
          if (
            !first_load &&
            first_hijack &&
            outerSelector !== undefined &&
            outerSelector !== '' &&
            (data['nojack'] === undefined || data['nojack'] === 'nojack')
          ) {
            hijackElement(outerSelector)
            first_hijack = false
          }
          if (
            (data['width'] !== undefined || data['height'] !== undefined) &&
            parseInt(data['height'].replace('px', '')) > 0
          ) {
            if (data['height'].match(/px$/))
              data['height'] =
                parseInt(data['height'].replace('px', '')) + 3 + 'px' // height + 3 to prevent scroll bars
            resizeMe(data['width'], data['height'])
          }
          if (data['task'] !== undefined) {
            if (data['task'] === 'scroll') {
              const container = jQuery('#artusmode_filecontainer')
              if (container !== undefined) {
                const top = container.offset().top
                window.scrollTo({ top: top, behavior: 'smooth' })
              }
            }
            if (
              data['task'] === 'hijack' &&
              outerSelector !== undefined &&
              outerSelector !== ''
            )
              hijackElement(outerSelector)
          }
          if (!first_load && data['main'] === 1) {
            first_load = true // reset this to prevent infinite reloading
            first_hijack = true // reset this to reload resizing
            jQuery(outerSelector).html(original_element)
            return
          }

          first_load = false
        } else {
          //console.log('Origin not allowed!');
        }
      },
      false
    )

    function hijackElement(elementSelector) {
      if (first_load) return false
      if (innerDiv === undefined || innerDiv === '') return false
      let h = jQuery(elementSelector).height()
      const w = jQuery(elementSelector).width()
      const frame = jQuery('#artusmode_filecontainer')
      let target = frame

      if (jQuery(elementSelector + ' #' + innerDiv).length > 0) {
        // check to make sure the selector is an ancestor...
        let i = 0 // counter to prevent infinite looping on failure
        if (original_element === undefined)
          original_element = jQuery(elementSelector).html() // holder for back-nav direction

        do {
          target.siblings().addClass('am_expander_sibling').hide()
          target.width(w).height('auto')
          if (target.height() > h) h = target.height()
          else target.css('min-height', 'auto')
          target
            .css('border', 'none')
            .css('margin', 0)
            .css('padding', 0)
            .css('position', 'initial')
            .css('overflow', 'auto')
            .css('width', 'auto')
            .css('min-height', h + 'px')
            .css('display', 'block')
            .css('max-width', 'none')
          target = target.parent()
        } while (
          target[0] !== jQuery(elementSelector)[0] &&
          target[0] !== jQuery('body')[0] &&
          i++ < 999
        )
      } else if ('#' + innerDiv === outerSelector) {
        // Do nothing, this is already in place
      } else {
        // ...otherwise we have to do a "jerky jump"
        jQuery(elementSelector).replaceWith(frame)
      }
      jQuery(elementSelector).attr('style', function (i, s) {
        return (s || '') + 'height: auto !important;'
      }) // T2521
      frame.css('min-height', h)
      frame.css('width', w)
    }

    function resizeMe(newWidth, newHeight) {
      if (newWidth !== undefined && newWidth.match(/%$/))
        newWidth = "'" + newWidth + "'"
      const container = jQuery('#artusmode_filecontainer')

      if (newWidth === undefined || newWidth === '') {
        container.animate(
          {
            height: newHeight,
          },
          500
        )
      } else {
        container.animate(
          {
            width: newWidth,
            height: newHeight,
          },
          500
        )
      }

      jQuery(document.body).animate(
        {
          scrollTop: container.offset().top,
        },
        500
      )
    }

    function getUrlParameter(sParam) {
      const sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&')
      let sParameterName, i

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=')

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined
            ? true
            : decodeURIComponent(sParameterName[1])
        }
      }
    }
  }

  function setExitListener(load_id) {
    let mouseY = 0
    const exitCounter = 0
    let mouseLog = []

    document.addEventListener('mousemove', function (e) {
      mouseY = e.clientY // need to log for exit monitoring
      /*mouseLog.push({'x': e.clientX, 'y': e.clientY, 't': Date.now()});*/
    })

    document.addEventListener('click', function (e) {
      mouseLog.push({ e: 'click', x: e.clientX, y: e.clientY, t: Date.now() })
    })

    document.addEventListener('scroll', function (e) {
      mouseLog.push({ e: 'scroll', y: window.scrollY, t: Date.now() })
    })

    jQuery(document).mouseleave(function () {
      if (mouseY < 100) {
        if (exitCounter < 1) {
          jQuery.ajax({
            url:
              'https://' +
              shortname +
              '.addons.la/leads/new/forms/ajax/log.php',
            type: 'POST',
            method: 'POST',
            xhrFields: {
              withCredentials: true,
            },
            data: {
              load_id: load_id,
              event: 'exit',
              log: mouseLog,
            },
            success: function (result) {
              console.log(result)
            },
          })
          mouseLog = [] // dump log
        }
      }
    })
  }
}
