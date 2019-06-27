import { Environment } from 'nunjucks';

import {
  Autoescape,
  Comment,
  Debug,
  FirstOf,
  IfChanged,
  Include,
  Load,
  Lorem,
  Now,
  PageUrl,
  Regroup,
  Spaceless,
  TemplateTag,
  WidthRatio,
  With
} from './tags';

import {
  add,
  addSlashes,
  capFirst,
  cut,
  date,
  defaultIfNone,
  dictsort,
  dictsortReversed,
  divisibleBy,
  escapeJs,
  fileSizeFormat,
  floatFormat,
  getDigit,
  iriEncode,
  join,
  jsonScript,
  lengthIs,
  linebreaks,
  linebreaksBr,
  lineNumbers,
  ljust,
  phone2Numeric,
  pluralize,
  pprint,
  rjust,
  safeSeq,
  slice,
  slugify
} from './filters';

class djanjucksEnvironment extends Environment {
  init(loaders, opts) {
    super.init(loaders, opts);
    // Initialise the django template tags and filters
    this.addExtension('Autoescape', new Autoescape());
    this.addExtension('Comment', new Comment());
    this.addExtension('Debug', new Debug());
    this.addExtension('FirstOf', new FirstOf());
    this.addExtension('IfChanged', new IfChanged());
    this.addExtension('Include', new Include());
    this.addExtension('Load', new Load());
    this.addExtension('Lorem', new Lorem());
    this.addExtension('Now', new Now());
    this.addExtension('PageUrl', new PageUrl());
    this.addExtension('Regroup', new Regroup());
    this.addExtension('Spaceless', new Spaceless());
    this.addExtension('TemplateTag', new TemplateTag());
    this.addExtension('WidthRatio', new WidthRatio());
    this.addExtension('With', new With());

    this.addFilter('add', add);
    this.addFilter('addslashes', addSlashes);
    this.addFilter('capfirst', capFirst);
    this.addFilter('cut', cut);
    this.addFilter('date', date);
    this.addFilter('default_if_none', defaultIfNone);
    this.addFilter('dictsort', dictsort);
    this.addFilter('dictsortreversed', dictsortReversed);
    this.addFilter('divisibleby', divisibleBy);
    this.addFilter('escapejs', escapeJs);
    this.addFilter('filesizeformat', fileSizeFormat);
    this.addFilter('floatformat', floatFormat);
    this.addFilter('get_digit', getDigit);
    this.addFilter('iriencode', iriEncode);
    this.addFilter('join', join);
    this.addFilter('json_script', jsonScript);
    this.addFilter('length_is', lengthIs);
    this.addFilter('linebreaks', linebreaks);
    this.addFilter('linebreaksbr', linebreaksBr);
    this.addFilter('linenumbers', lineNumbers);
    this.addFilter('ljust', ljust);
    this.addFilter('phone2numeric', phone2Numeric);
    this.addFilter('pluralize', pluralize);
    this.addFilter('pprint', pprint);
    this.addFilter('rjust', rjust);
    this.addFilter('safeseq', safeSeq);
    this.addFilter('slice', slice);
    this.addFilter('slugify', slugify);

    // Rename exisiting Nunjucks filters to match Django
    this.filters.force_escape = this.filters.forceescape;
    this.filters.make_list = this.filters.list;
    delete this.filters.forceescape;
    delete this.filters.list;
  }
}

export default djanjucksEnvironment;
