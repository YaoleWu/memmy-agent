/** A rejected preference remains available in its original historical turn. */
export function userMemoryContextIssue(text: string): "temporary_context" | "unresolved_reference" | null {
  const content = text.trim();
  const temporary = /(?:我|我们)(?:现在|这会儿)?(?:正在|在)(?:开车|开会|赶路)|我(?:现在|今天)(?:没空|不方便|赶时间)|\b(?:i am|i'm)\s+(?:driving|in a meeting|in a hurry)\b/i;
  const conditional = /(?:如果|每当|每次|只要|当我)[^。！？\n]{0,40}(?:开车|开会|赶路)|(?:开车|开会|赶路)(?:时|的时候)|\b(?:when|whenever|while|if)\b[^.!?\n]{0,40}\b(?:driving|meeting|hurry)\b/i;
  if (temporary.test(content) && !conditional.test(content)) return "temporary_context";

  const unnamedEmail = /(?:这个|那个|上述|上面(?:的)?|刚才(?:的)?)\s*(?:邮箱|邮件地址)|\b(?:this|that|the above)\s+email(?: address)?\b/i;
  const emailAddress = /[A-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
  if (unnamedEmail.test(content) && !emailAddress.test(content)) return "unresolved_reference";

  const unnamedTarget = /(?:这个|那个|这台|那台|这份|那份|上述)\s*(?:账号|账户|链接|机器|服务器|项目|文件|方案|配置|模型|端口|入口|目录|路径)|\b(?:this|that|the above)\s+(?:account|link|machine|server|project|file|configuration|model|port|path)\b/i;
  const locator = /`[^`\n]+`|https?:\/\/\S+|(?:^|[\s(（:：])(?:\/|~\/)[^\s，。；;]+|\b[\w.-]+\/[\w./-]+\b/;
  return unnamedTarget.test(content) && !locator.test(content) ? "unresolved_reference" : null;
}
