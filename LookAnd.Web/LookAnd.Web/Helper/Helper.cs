using System;
using System.IO;
using System.Text;

namespace LookAnd.Web.Helper
{
   public static class ProgramHelper
    {
        /// <summary>
     /// Returns the contents of the specified file as a byte array.
     /// </summary>
     /// <param name="imageFilePath">The image file to read.</param>
     /// <returns>The byte array of the image data.</returns>
     private static byte[] GetImageAsByteArray(string imageFilePath)
     {
         FileStream fileStream = new FileStream(imageFilePath, FileMode.Open, FileAccess.Read);
         BinaryReader binaryReader = new BinaryReader(fileStream);
         return binaryReader.ReadBytes((int)fileStream.Length);
     }

     /// <summary>
     /// Formats the given JSON string by adding line breaks and indents.
     /// </summary>
     /// <param name="json">The raw JSON string to format.</param>
     /// <returns>The formatted JSON string.</returns>
     public static string JsonPrettyPrint(string json)
     {
         if (string.IsNullOrEmpty(json))
             return string.Empty;

         json = json.Replace(Environment.NewLine, "").Replace("\t", "");

         string INDENT_STRING = "    ";
         var indent = 0;
         var quoted = false;
         var sb = new StringBuilder();
         for (var i = 0; i < json.Length; i++)
         {
             var ch = json[i];
             switch (ch)
             {
                 case '{':
                 case '[':
                     sb.Append(ch);
                     if (!quoted)
                     {
                         sb.AppendLine();
                     }
                     break;
                 case '}':
                 case ']':
                     if (!quoted)
                     {
                         sb.AppendLine();
                     }
                     sb.Append(ch);
                     break;
                 case '"':
                     sb.Append(ch);
                     bool escaped = false;
                     var index = i;
                     while (index > 0 && json[--index] == '\\')
                         escaped = !escaped;
                     if (!escaped)
                         quoted = !quoted;
                     break;
                 case ',':
                     sb.Append(ch);
                     if (!quoted)
                     {
                         sb.AppendLine();
                     }
                     break;
                 case ':':
                     sb.Append(ch);
                     if (!quoted)
                         sb.Append(" ");
                     break;
                 default:
                     sb.Append(ch);
                     break;
             }
         }
         return sb.ToString();
     }
    }
}
