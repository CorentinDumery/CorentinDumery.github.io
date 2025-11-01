# Personal website

The front page is partially inspired by [Jon Barron's awesome website](https://github.com/jonbarron/jonbarron.github.io).

### Formatting
```
npx prettier --write index.html
```

### Template project entry
```
<!-- TEMPLATE:
    <tr class="project-entry" onmouseout="XXX_stop()" onmouseover="XXX_start()">
        <td class="project-thumb">
            <div class="one">
            <div class="two" id='XXX_image'><video  width=100% height=100% muted autoplay loop>
            <source src="images/papers/XXX.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </video></div>
            <img src='images/papers/XXX.png' width="200">
            </div>
            <script type="text/javascript">
            function XXX_start() {
                document.getElementById('XXX_image').style.opacity = "1";
            }

            function XXX_stop() {
                document.getElementById('XXX_image').style.opacity = "0";
            }
            XXX_stop()
            </script>
        </td>
        <td class="project-cell">
            <a href="projects/XXX">
            <span class="papertitle">XXX: xxx</span>
            </a>
            <span class="half-line"></span>
            <strong>Corentin Dumery</strong>,
            <a href="...">author</a>,
            <a href="...">author</a>,
            <a href="...">author</a>
            <br>
            Venue YEAR
            <br>

            <span class="half-line"></span>
            | <a href="projects/XXX">Project page</a>
            | <a href="projects/XXX">Paper</a>
            |
            <span class="half-line"></span>
            <short-desc> XXX description
            </short-desc>
        </td>
    </tr>
-->
```
