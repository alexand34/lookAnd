using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using LookAnd.Web.Helper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace LookAnd.Web.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [EnableCors("MyPolicy")]
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
    public string Post([FromBody] string value)
    {
      string visionApiKey = "8a9c440964b64b07bc84a1b2af6b6384";
      string visionApiEndPoint = "https://westeurope.api.cognitive.microsoft.com";
      HttpClient client = new HttpClient();
      client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", visionApiKey);
      string requestParameters = "visualFeatures=Categories,Description,Color&language=en";
      string uri = visionApiEndPoint + "/vision/v1.0/analyze" + "?" + requestParameters;
      HttpResponseMessage response;
      string converted = value.Replace('-', '+');
      converted = converted.Replace('_', '/');
      converted = converted.Replace("\t", string.Empty);
      converted = converted.Replace("\n", string.Empty);
      try
      {
        var img = this.Base64ToBytes(converted);
        using (ByteArrayContent content = new ByteArrayContent(img))
        {
          content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
          response = client.PostAsync(uri, content).Result;
          return response.Content.ReadAsStringAsync().Result;
        }
      }
      catch(Exception ex)
      {
        return "Success=false";
      }
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


    private byte[] Base64ToBytes(string base64String)
    {
      // Convert Base64 String to byte[]
      return Convert.FromBase64String(base64String);
    }
  }
}
