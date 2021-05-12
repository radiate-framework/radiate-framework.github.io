import{r as s,o as n,c as e,a,w as t,d as o,b as p}from"./app.d80ff392.js";const l='{"title":"Custom Post Types","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"Creating A Post Type","slug":"creating-a-post-type"},{"level":3,"title":"Post Type Options","slug":"post-type-options"},{"level":3,"title":"Post Type Labels","slug":"post-type-labels"},{"level":3,"title":"Registering Post Types","slug":"registering-post-types"},{"level":2,"title":"Reserved Post Types","slug":"reserved-post-types"},{"level":3,"title":"Special Post Types","slug":"special-post-types"},{"level":3,"title":"Blocked Post Types","slug":"blocked-post-types"}],"relativePath":"docs/the-basics/custom-post-types.md","lastUpdated":1620821165326}',i={},r=o('<h1 id="custom-post-types"><a class="header-anchor" href="#custom-post-types" aria-hidden="true">#</a> Custom Post Types</h1><p><div class="table-of-contents"><ul><li><a href="#introduction">Introduction</a></li><li><a href="#creating-a-post-type">Creating A Post Type</a><ul><li><a href="#post-type-options">Post Type Options</a></li><li><a href="#post-type-labels">Post Type Labels</a></li><li><a href="#registering-post-types">Registering Post Types</a></li></ul></li><li><a href="#reserved-post-types">Reserved Post Types</a><ul><li><a href="#special-post-types">Special Post Types</a></li><li><a href="#blocked-post-types">Blocked Post Types</a></li></ul></li></ul></div></p><h2 id="introduction"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Post types are a way to separate different forms of content. As an example, Your site may feature a blog (posts) and a list of your favourite films. Whilst you could add a &quot;film&quot; category to your posts, a better solution would be to create a film post type.</p><h2 id="creating-a-post-type"><a class="header-anchor" href="#creating-a-post-type" aria-hidden="true">#</a> Creating A Post Type</h2><p>To get started, we&#39;ll use <code>make:post-type</code> to create a film post type. The <code>PostType</code> name should be in the singular form for example <strong>Film</strong> not <strong>Films</strong>.</p><div class="language-"><pre><code>wp radiate make:post-type Film\n</code></pre></div>',7),c=a("p",null,[p("Remember to use "),a("em",null,"StudlyCase"),p(" for your post type names. The name will be automatically transformed to "),a("em",null,"snake_case"),p(".")],-1),u=o('<p>Radiate will generate a <code>Film</code> post type in your <code>app/WordPress/PostTypes</code> directory.</p><div class="language-php"><pre><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">Theme<span class="token punctuation">\\</span>WordPress<span class="token punctuation">\\</span>PostTypes</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>WordPress<span class="token punctuation">\\</span>PostType</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Film</span> <span class="token keyword">extends</span> <span class="token class-name">PostType</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * The name\n     *\n     * @var string\n     */</span>\n    <span class="token keyword">protected</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;film&#39;</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * The singular label\n     *\n     * @var string\n     */</span>\n    <span class="token keyword">protected</span> <span class="token variable">$singular</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Film&#39;</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * The plural label\n     *\n     * @var string\n     */</span>\n    <span class="token keyword">protected</span> <span class="token variable">$plural</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Films&#39;</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * The taxonomies\n     *\n     * @var array\n     */</span>\n    <span class="token keyword">protected</span> <span class="token variable">$taxonomies</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * The options\n     *\n     * @var array\n     */</span>\n    <span class="token keyword">protected</span> <span class="token variable">$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token string single-quoted-string">&#39;public&#39;</span>       <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;has_archive&#39;</span>  <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;show_in_rest&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;menu_icon&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;dashicons-admin-post&#39;</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;supports&#39;</span>     <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;editor&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;author&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;thumbnail&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></code></pre></div><h3 id="post-type-options"><a class="header-anchor" href="#post-type-options" aria-hidden="true">#</a> Post Type Options</h3><p>The post type options are an array of properties for the <code>PostType</code> for example, <code>has_archive</code> determines if the post type will have an archive page, <code>menu_icon</code> specifies the <a href="https://developer.wordpress.org/resource/dashicons/#welcome-learn-more" target="_blank" rel="noopener noreferrer">Dashicon</a> to use.</p><p>The different arguments accepted are well documented in the <a href="https://developer.wordpress.org/reference/functions/register_post_type/" target="_blank" rel="noopener noreferrer">WordPress documentation</a></p><h3 id="post-type-labels"><a class="header-anchor" href="#post-type-labels" aria-hidden="true">#</a> Post Type Labels</h3><p>One pain point of creating post types the standard WordPress way is the many labels that tend to require the same string-replace treatment. I.e. <em>Add New Film</em>, <em>Add New Book</em>, <em>Add New Event</em>.</p><p>Radiate makes handling labels a breeze. In your <code>PostType</code> class, the <code>$singular</code> and <code>$plural</code> names are determined for you. These labels are then inserted in the required places so you don&#39;t have to.</p><p>If you do want to specify your own labels, you can add a <code>labels</code> method to the <code>PostType</code> and return an array of your own options.</p><div class="language-php"><pre><code><span class="token comment">/**\n * Return the post type labels\n *\n * @return array\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">labels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">[</span>\n        <span class="token string single-quoted-string">&#39;new_item&#39;</span>     <span class="token operator">=&gt;</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;New Awesome Film&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;add_new_item&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Add New Amazing Film&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;edit_item&#39;</span>    <span class="token operator">=&gt;</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Edit SuperDuper Film&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;view_item&#39;</span>    <span class="token operator">=&gt;</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;View The Film&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;view_items&#39;</span>   <span class="token operator">=&gt;</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;View Some Films&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;search_items&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Search Our Catalogue Of Films&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',10),d=a("p",null,"Labels are intelligently merged with Radiate's defaults so you can define as many or as few as you like and the rest will be taken care of.",-1),k=o('<h3 id="registering-post-types"><a class="header-anchor" href="#registering-post-types" aria-hidden="true">#</a> Registering Post Types</h3><p>Registering your custom post types is as easy as generating them. In your <code>WordPressServiceProvider</code>, add the <code>PostType</code> classname to the <code>$postTypes</code> array.</p><div class="language-php"><pre><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">Theme<span class="token punctuation">\\</span>Providers</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Providers<span class="token punctuation">\\</span>WordPressServiceProvider</span> <span class="token keyword">as</span> ServiceProvider<span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Theme<span class="token punctuation">\\</span>WordPress<span class="token punctuation">\\</span>PostTypes<span class="token punctuation">\\</span>Film</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">WordPressServiceProvider</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceProvider</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * The custom post types to register\n     *\n     * @var array\n     */</span>\n    <span class="token keyword">protected</span> <span class="token variable">$postTypes</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token class-name static-context">Film</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></code></pre></div><h2 id="reserved-post-types"><a class="header-anchor" href="#reserved-post-types" aria-hidden="true">#</a> Reserved Post Types</h2><p>WordPress has some reserved post types that you shouldn&#39;t override. <code>make:post-type</code> determines if the <code>PostType</code> you attempted to create is reserved.</p><h3 id="special-post-types"><a class="header-anchor" href="#special-post-types" aria-hidden="true">#</a> Special Post Types</h3><p>Some reserved post types have been deemed &quot;special&quot; and may be extended with <a href="./custom-taxonomies.html">custom taxonomies</a> in the usual way. When using <code>make:post-type</code> on one of these reserved post types, the <code>PostType</code> will be generated with a slimmed down class.</p><ul><li>post</li><li>page</li><li>attachment</li></ul><h3 id="blocked-post-types"><a class="header-anchor" href="#blocked-post-types" aria-hidden="true">#</a> Blocked Post Types</h3><p>Post types that do not require custom taxonomies cannot be generated using <code>make:post-type</code>, returning an error in the console instead.</p><ul><li>revision</li><li>nav_menu_item</li><li>custom_css</li><li>customize_changeset</li><li>oembed_cache</li><li>user_request</li><li>wp_block</li><li>action</li><li>author</li><li>order</li><li>theme</li></ul>',11);i.render=function(o,p,l,i,g,h){const y=s("AppNotice");return n(),e("div",null,[r,a(y,{type:"info"},{default:t((()=>[c])),_:1}),u,a(y,{type:"info"},{default:t((()=>[d])),_:1}),k])};export default i;export{l as __pageData};