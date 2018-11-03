using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LookAnd.Web.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ValuesController : ControllerBase
  {
    // GET api/values
    [HttpGet]
    public ActionResult<IEnumerable<string>> Get()
    {
      return new string[] {"value1", "value2"};
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public ActionResult<string> Get(int id)
    {
      return "value";
    }


    // POST api/values
    [HttpPost]
    public async Task PostImage([FromBody] string value)
    {
      string imagePath = @"https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg";

      string visionApiKey = "8a9c440964b64b07bc84a1b2af6b6384";
      string visionApiEndPoint = "https://westeurope.api.cognitive.microsoft.com";

      HttpClient client = new HttpClient();

      client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", visionApiKey);

      // Request parameters. A third optional parameter is "details".
      string requestParameters = "visualFeatures=Categories,Description,Color&language=en";

      // Assemble the URI for the REST API Call.
      string uri = visionApiEndPoint + "/analyze" + "?" + requestParameters;

      HttpResponseMessage response;

      // Request body. Posts an image you've added to your site's images folder.
      var fileInfo = env.WebRootFileProvider.GetFileInfo(imagePath);
      byte[] byteData = ProgramHelper.GetImageAsByteArray(fileInfo.PhysicalPath);

      string contentString = string.Empty;
      using (ByteArrayContent content = new ByteArrayContent(byteData))
      {
        // This example uses content type "application/octet-stream".
        // The other content types you can use are "application/json" and "multipart/form-data".
        content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");

        // Execute the REST API call.
        response = client.PostAsync(uri, content).Result;

        // Get the JSON response.
        contentString = response.Content.ReadAsStringAsync().Result;
      }
    }

//    if (env.IsDevelopment())
//    {
//      app.UseDeveloperExceptionPage();
//    }
//
//    app.Run(async (context) =>
//    {
//      await context.Response.WriteAsync("<h1>Cognitive Services Demo</h1>");
//      await context.Response.WriteAsync($"<p><b>Test Image:</b></p>");
//      await context.Response.WriteAsync($"<div><img src=\"" + imagePath + "\" /></div>");
//      await context.Response.WriteAsync($"<p><b>Computer Vision API results:</b></p>");
//      await context.Response.WriteAsync("<p>");
//      await context.Response.WriteAsync(ProgramHelper.JsonPrettyPrint(contentString));
//      await context.Response.WriteAsync("<p>");
//    });

    // POST api/values
    [HttpPost]
    public void Post([FromBody] string value)
    {

    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
